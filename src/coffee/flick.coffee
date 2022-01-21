import 'flickity/dist/flickity.min.css'
import Flickity from 'flickity'

require("../sass/flickity.sass")

new Flickity(".carousel", {
  wrapAround: true,
})