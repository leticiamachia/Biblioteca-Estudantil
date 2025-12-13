
document.getElementById("btnEnviar").addEventListener("click", function() {

  const nome = document.getElementById("nome").value.trim();
  const matricula = document.getElementById("matricula").value.trim();
  const email = document.getElementById("email").value.trim();
  const sugestao = document.getElementById("sugestao").value.trim();

  if (!nome || !matricula || !email || !sugestao) {
    alert("Por favor, preencha todos os campos antes de enviar.");
    return;
  }
  const modal = new bootstrap.Modal(document.getElementById('modalSucesso'));
  modal.show();

  document.getElementById("nome").value = "";
  document.getElementById("matricula").value = "";
  document.getElementById("email").value = "";
  document.getElementById("sugestao").value = "";
});

