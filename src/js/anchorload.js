require('jquery.scrollto')

$(window).on("load", function() {
  if (location.hash) {
    $.scrollTo(document.querySelector(location.hash));
  }
})
