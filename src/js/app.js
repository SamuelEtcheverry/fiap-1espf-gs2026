
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

window.addEventListener('scroll', function () {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

hamburger.addEventListener('click', function () {
  navLinks.classList.toggle('aberto');
});


navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('aberto');
  });
});


document.getElementById('temas').addEventListener('click', function (e) {
  const btn = e.target.closest('.tema-btn');
  if (!btn) return;

  document.body.setAttribute('data-theme', btn.dataset.tema);
  localStorage.setItem('ow-tema', btn.dataset.tema);

  document.querySelectorAll('.tema-btn').forEach(function (b) {
    b.classList.toggle('active', b === btn);
  });
});


(function () {
  const temaSalvo = localStorage.getItem('ow-tema') || 'dark';
  if (!['dark','blue','green'].includes(temaSalvo)) { localStorage.setItem('ow-tema','dark'); }
  document.body.setAttribute('data-theme', temaSalvo);
  document.querySelectorAll('.tema-btn').forEach(function (b) {
    b.classList.toggle('active', b.dataset.tema === temaSalvo);
  });
})();


function enviarContato(evento) {
  evento.preventDefault();

  const nome  = document.getElementById('cNome');
  const email = document.getElementById('cEmail');
  const msg   = document.getElementById('cMsg');

  let valido = true;


  if (!nome.value.trim()) {
    document.getElementById('erroNome').textContent = 'Nome é obrigatório.';
    valido = false;
  } else {
    document.getElementById('erroNome').textContent = '';
  }


  if (!email.value.trim()) {
    document.getElementById('erroEmail').textContent = 'Email é obrigatório.';
    valido = false;
  } else if (!email.value.includes('@')) {
    document.getElementById('erroEmail').textContent = 'Informe um email válido.';
    valido = false;
  } else {
    document.getElementById('erroEmail').textContent = '';
  }


  if (!msg.value.trim()) {
    document.getElementById('erroMsg').textContent = 'Mensagem é obrigatória.';
    valido = false;
  } else {
    document.getElementById('erroMsg').textContent = '';
  }

  if (valido) {
    document.getElementById('sucesso').classList.remove('hidden');
    nome.value = '';
    email.value = '';
    msg.value = '';
  }
}
