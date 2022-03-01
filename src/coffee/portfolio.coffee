# style
require("../sass/index.sass")

# scripts
    # coffeescript
require("./util/background.coffee")
require("./util/isotope.coffee")
    # javascript
require("../js/dropshadow.js")
require("../js/images.js")
require("../js/parallax.js")

import TagPicker from '@taufik-nurrohman/tag-picker'
new TagPicker(document.querySelector('.tagged'))
