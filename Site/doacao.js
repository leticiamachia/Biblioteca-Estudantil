const messages = document.getElementById("messages");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("msg", sender);
  msg.textContent = text;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();

  if (text === "") return;

  addMessage(text, "user");
  input.value = "";

  setTimeout(() => {
    responderAdministrador(text);
  }, 800);

  function responderAdministrador(text) {
    const respostas = [
      "Obrigado pela sua mensagem! Como posso ajudar?",
      "Certo! Pode me enviar mais detalhes?",
      "Ótimo, vou verificar isso para você.",
      "Perfeito! Sua doação será registrada."
    ];

    const resposta = respostas[Math.floor(Math.random() * respostas.length)];

    addMessage(resposta, "admin");
  }
}