
var perguntas = [
    {
      pergunta: "A que velocidade os objetos em órbita baixa (LEO) se movem?",
      opcoes: ["5.000 km/h", "12.000 km/h", "28.000 km/h", "50.000 km/h"],
      correta: 2
    },
    {
      pergunta: "Em que ano ocorreu a colisão entre o Iridium 33 e o Kosmos 2251?",
      opcoes: ["2001", "2009", "2013", "2018"],
      correta: 1
    },
    {
      pergunta: "Como se chama a reação em cadeia onde detritos geram mais detritos?",
      opcoes: ["Efeito Doppler", "Cascata Orbital", "Síndrome de Kessler", "Efeito Lagrange"],
      correta: 2
    },
    {
      pergunta: "O Space Fence consegue detectar objetos a partir de qual tamanho?",
      opcoes: ["Tamanho de um carro", "Tamanho de um tijolo", "Tamanho de uma bola de gude", "Tamanho de um avião"],
      correta: 2
    },
    {
      pergunta: "Qual país destruiu o satélite Fengyun-1C num teste ASAT em 2007?",
      opcoes: ["Rússia", "EUA", "China", "Índia"],
      correta: 2
    },
    {
      pergunta: "Qual é o limiar de probabilidade de colisão que dispara manobras de desvio?",
      opcoes: ["1 em 100", "1 em 1.000", "1 em 10.000", "1 em 1.000.000"],
      correta: 2
    },
    {
      pergunta: "Quantos microdetritos menores que 1 cm estima-se que estejam em órbita?",
      opcoes: ["Cerca de 1 mil", "Cerca de 100 mil", "Mais de 140 milhões", "Menos de 1 milhão"],
      correta: 2
    },
    {
      pergunta: "O que a missão ClearSpace-1 da ESA planeja fazer em 2028?",
      opcoes: ["Lançar novos satélites", "Capturar e remover o PROBA-1 da órbita", "Instalar radar em Marte", "Testar armas antissatélite"],
      correta: 1
    },
    {
      pergunta: "Quantos fragmentos gerou a quebra do Long March 6A em 2024?",
      opcoes: ["Menos de 50", "Exatamente 200", "Mais de 700", "Mais de 5.000"],
      correta: 2
    },
    {
      pergunta: "A regra da FCC exige a desorbitação de satélites em quantos anos?",
      opcoes: ["2 anos", "5 anos", "10 anos", "25 anos"],
      correta: 1
    }
  ];
  
  
  var indiceAtual = 0;
  var pontuacao   = 0;
  var respondeu   = false;
  
  function iniciarQuiz() {
    indiceAtual = 0;
    pontuacao   = 0;
    respondeu   = false;
  
    document.getElementById('quizInicio').classList.add('hidden');
    document.getElementById('quizFim').classList.add('hidden');
    document.getElementById('quizJogo').classList.remove('hidden');
  
    mostrarPergunta();
  }
  
  function mostrarPergunta() {
    respondeu = false;
  
    var p = perguntas[indiceAtual];
  
  
    document.getElementById('quizContador').textContent = (indiceAtual + 1) + '/10';
    document.getElementById('quizPontos').textContent   = pontuacao + ' pts';
    document.getElementById('barraFill').style.width    = (indiceAtual / perguntas.length * 100) + '%';
  
  
    document.getElementById('quizPergunta').textContent = p.pergunta;
  
  
    var container = document.getElementById('quizOpcoes');
    container.innerHTML = '';
  
    p.opcoes.forEach(function (opcao, i) {
      var btn       = document.createElement('button');
      btn.className = 'opcao';
      btn.textContent = opcao;
      btn.onclick   = function () { responder(i); };
      container.appendChild(btn);
    });
  }
  
  function responder(escolha) {
    if (respondeu) return;
    respondeu = true;
  
    var correta = perguntas[indiceAtual].correta;
    var botoes  = document.querySelectorAll('.opcao');
  
    botoes.forEach(function (btn) { btn.disabled = true; });
    botoes[correta].classList.add('certa');
  
    if (escolha !== correta) {
      botoes[escolha].classList.add('errada');
    } else {
      pontuacao++;
    }
  
    setTimeout(function () {
      indiceAtual++;
      if (indiceAtual < perguntas.length) {
        mostrarPergunta();
      } else {
        mostrarFim();
      }
    }, 1400);
  }
  
  function mostrarFim() {
    document.getElementById('barraFill').style.width = '100%';
    document.getElementById('quizJogo').classList.add('hidden');
    document.getElementById('quizFim').classList.remove('hidden');
  
    document.getElementById('fimNota').textContent = pontuacao;
  
    var icone, titulo, msg;
  
    if (pontuacao >= 9) {
      icone = '🏆'; titulo = 'Especialista Orbital!'; msg = 'Impressionante! Você domina o tema.';
    } else if (pontuacao >= 7) {
      icone = '⭐'; titulo = 'Ótimo resultado!'; msg = 'Você sabe muito sobre lixo espacial!';
    } else if (pontuacao >= 5) {
      icone = '🚀'; titulo = 'Bom começo!'; msg = 'Você já conhece o básico. Continue aprendendo!';
    } else {
      icone = '📚'; titulo = 'Continue estudando!'; msg = 'O lixo espacial é um tema importante. Explore mais!';
    }
  
    document.getElementById('fimIcone').textContent = icone;
    document.getElementById('fimTitulo').textContent = titulo;
    document.getElementById('fimMsg').textContent    = msg;
  }
  
  function reiniciarQuiz() {
    iniciarQuiz();
  }
  