
var slides      = document.querySelectorAll('.slide');
var dots        = document.querySelectorAll('.dot');
var indice      = 0;
var intervalo   = 5000;

function mostrarSlide(novoIndice) {
  slides.forEach(function (s) { s.classList.remove('active'); });
  dots.forEach(function (d)   { d.classList.remove('active'); });

  indice = (novoIndice + slides.length) % slides.length;
  slides[indice].classList.add('active');
  dots[indice].classList.add('active');
}

function proximoSlide() {
  mostrarSlide(indice + 1);
}


dots.forEach(function (dot) {
  dot.addEventListener('click', function () {
    mostrarSlide(parseInt(dot.dataset.slide));
  });
});


var timer = setInterval(proximoSlide, intervalo);


var hero = document.querySelector('.hero');
hero.addEventListener('mouseenter', function () { clearInterval(timer); });
hero.addEventListener('mouseleave', function () { timer = setInterval(proximoSlide, intervalo); });
