
function calcularRisco() {
    var nome      = document.getElementById('simNome').value.trim();
    var altitude  = parseFloat(document.getElementById('simAlt').value);
    var velocidade = parseFloat(document.getElementById('simVel').value);
    var detritos  = parseInt(document.getElementById('simDet').value);
  
    var resultado = document.getElementById('simResultado');
  
  
    if (!nome || isNaN(altitude) || isNaN(velocidade) || isNaN(detritos)) {
      resultado.innerHTML = '<div class="resultado-placeholder"><span>⚠️</span><p>Preencha todos os campos corretamente.</p></div>';
      return;
    }
  
  
    var fatorAlt = 0;
    if (altitude >= 400 && altitude <= 900) {
      fatorAlt = 40; 
    } else if (altitude < 400 || (altitude > 900 && altitude <= 2000)) {
      fatorAlt = 20;
    } else {
      fatorAlt = 5; 
    }
  
  
    var fatorVel = 0;
    if (velocidade >= 25000) {
      fatorVel = 30;
    } else if (velocidade >= 15000) {
      fatorVel = 15;
    } else {
      fatorVel = 5;
    }
  
    var fatorDet = 0;
    if (detritos >= 20) {
      fatorDet = 30;
    } else if (detritos >= 10) {
      fatorDet = 20;
    } else if (detritos >= 5) {
      fatorDet = 10;
    } else {
      fatorDet = 2;
    }
  
    var indice = fatorAlt + fatorVel + fatorDet;
  
  
    var nivel, icone, recomendacao;
  
    if (indice <= 35) {
      nivel = 'baixo';
      icone = '✅';
      recomendacao = '✅ Situação segura. Monitoramento de rotina. Nenhuma manobra necessária.';
    } else if (indice <= 65) {
      nivel = 'medio';
      icone = '⚠️';
      recomendacao = '⚠️ Risco elevado. Monitoramento intensificado recomendado. Planeje uma manobra preventiva.';
    } else {
      nivel = 'alto';
      icone = '🚨';
      recomendacao = '🚨 RISCO CRÍTICO. Manobra de evasão imediata recomendada. Notifique o controle orbital.';
    }
  
    var labelNivel = { baixo: 'BAIXO', medio: 'MÉDIO', alto: 'ALTO' };
  
    resultado.innerHTML =
      '<div class="resultado-card">' +
        '<span style="font-size:2.5rem">' + icone + '</span>' +
        '<div style="font-family:var(--fonte-titulo);font-size:1rem;color:var(--texto-sec);margin:0.5rem 0 0">' + nome + '</div>' +
        '<div class="resultado-nivel ' + nivel + '">' + labelNivel[nivel] + '</div>' +
        '<div class="resultado-info">' +
          '<span>Índice calculado: ' + indice + '/100</span>' +
          '<span>Altitude: ' + altitude + ' km</span>' +
          '<span>Velocidade: ' + velocidade.toLocaleString('pt-BR') + ' km/h</span>' +
          '<span>Detritos próximos: ' + detritos + '</span>' +
        '</div>' +
        '<div class="resultado-rec ' + nivel + '">' + recomendacao + '</div>' +
      '</div>';
  }
  