// https://stackoverflow.com/a/30765779

const parallax = document.querySelectorAll('.parallax');

function paint(e, target, layer) {
  var layer_coeff = 10 / layer;
  var x = ($(window).width() - target.offsetWidth) / 2 - (e.pageX - ($(window).width() / 2)) / layer_coeff;
  var y = ($(window).height() - target.offsetHeight) / 2 - (e.pageY - ($(window).height() / 2)) / layer_coeff;
  $(target).offset({ top: y ,left : x });
};

parallax.forEach((v, k, p) => {
    document.addEventListener('mousemove', (e) => paint(e, v, 1), {
      passive: true
    });
  }
)