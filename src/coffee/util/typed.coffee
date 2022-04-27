import Typed from 'typed.js'

list = _.sample([
    "hi i make things",
    "haha code go brrr",
    "this is kinda cringe ngl",
    "wait what's a code???",
    "it is unlikely this site works",
    "what do i even put here?",
    "i hate web dev",
])

options = {
  strings: [list],
  typeSpeed: 40,
}

if document.getElementById('description')
  typed = new Typed('#description', options)
