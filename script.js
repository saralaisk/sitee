const botao = document.querySelector(".botao");
const mensagem = document.querySelector(".mensagem");

function mostrarMensagem() {
    mensagem.textContent = "✨ Você é capaz de conquistar tudo o que deseja! Acredite em você, continue tentando e nunca desista dos seus sonhos. 💗✨";
}

botao.addEventListener("click", mostrarMensagem);
