import 'flickity/dist/flickity.min.css'

jQuery = require("jquery")
jQueryBridget = require('jquery-bridget')
import Flickity from 'flickity'
jQueryBridget('flickity', Flickity, $)

require("../../sass/flickity.sass")

carousels = document.querySelectorAll('.carousel')

jQuery($ ->
  $('.carousel').flickity({
    wrapAround: true,
    setGallerySize: false,
    lazyLoad: 2,
  })
)
