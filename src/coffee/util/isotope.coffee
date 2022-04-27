jQueryBridget = require('jquery-bridget')
Isotope = require('isotope-layout')
jQueryBridget('isotope', Isotope, $)

require("../../sass/isotope.sass")

grid = $(".grid").isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
})

$(".filter").on("click", "div", () ->
    filter = $(this).attr("data-filter")
    grid.isotope({ filter: filter })
)
