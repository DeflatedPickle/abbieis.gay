import Typed from 'typed.js'

list = _.sample([
    "hi i make things",
    "haha code go brrr",
])

options = {
  strings: [list],
  typeSpeed: 40,
}

typed = new Typed('#description', options)