let podeCriar = true;

function criarNovoBotao() {
  const simBtn = document.getElementById('simBtn');
  if (podeCriar) {
    const novoBotao = document.createElement('button');
    novoBotao.textContent = 'Sim';
    novoBotao.onclick = criarNovoBotao;
    simBtn.parentNode.appendChild(novoBotao);
  }
}

function responderNao() {
  criarNovoBotao();
}

function pararCriacao() {
  podeCriar = false;
  const mensagem = document.getElementById('mensagem');
  mensagem.style.display = 'block';
}