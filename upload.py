import subprocess
import shutil
import os
import sys

import colorama


def red(text):
    return colorama.Fore.RED + text + colorama.Style.RESET_ALL


def green(text):
    return colorama.Fore.GREEN + text + colorama.Style.RESET_ALL


if __name__ == "__main__":
    colorama.init()

    if not shutil.which("git"):
        print(red("Git could not be found, exiting"))
        sys.exit()

    if not shutil.which("npm"):
        print(red("NPM could not be found, exiting"))
        sys.exit()

    # Change to the main branch
    print(green("Changing to the main branch..."))
    subprocess.call(["git checkout main"], shell=True)

    # Build the site
    print(green("Building the site..."))
    subprocess.call(["npm run prod"], shell=True)

    # Change to the GitHub Pages branch
    print(green("Checking out the GitHub Pages branch..."))
    subprocess.call(["git checkout built"], shell=True)

    # Move the files out of dist/
    print(green("Moving the files..."))
    files = os.listdir("dist")
    for f in files:
        shutil.move("dist/" + f, f)

    subprocess.call(["git add ."], shell=True)

    # Commit the built files
    print(green("Committing the files..."))
    subprocess.call(["git commit -a -m Rebuilt site"], shell=True)

    # Delete the built files
    # print("Deleting the files...")
    # for f in files:
    #     os.remove(f)

    # Pushing to the GitHub
    print(green("Pushing to the GitHub..."))
    subprocess.call(["git push origin built"], shell=True)

    # Change to the main branch
    print(green("Changing back to the main branch..."))
    subprocess.call(["git checkout main"], shell=True)

    print(green("Finished uploading the site, exiting"))
