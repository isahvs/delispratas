//validação de formulário
document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();

  // Pegar os valores
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  // Elementos de ajuda
  const usernameHelper = document.getElementById("username-helper");
  const emailHelper = document.getElementById("email-helper");
  const passwordHelper = document.getElementById("password-helper");
  const confirmPasswordHelper = document.getElementById("confirm-password-helper");

  // Resetar mensagens
  usernameHelper.textContent = "";
  emailHelper.textContent = "";
  passwordHelper.textContent = "";
  confirmPasswordHelper.textContent = "";

  let temErro = false;

  // Validação nome
  if (username === "") {
    usernameHelper.textContent = "O nome de usuário é obrigatório.";
    temErro = true;
  }

  // Validação email
  if (email === "") {
    emailHelper.textContent = "O e-mail é obrigatório.";
    temErro = true;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailHelper.textContent = "Formato de e-mail inválido.";
    temErro = true;
  }

  // Validação senha
  if (password.length < 6) {
    passwordHelper.textContent = "A senha deve ter no mínimo 6 caracteres.";
    temErro = true;
  }

  // Validação confirmação
  if (password !== confirmPassword) {
    confirmPasswordHelper.textContent = "As senhas não coincidem.";
    temErro = true;
  }

  // Se tudo estiver certo
  if (!temErro) {
    alert("Cadastro realizado com sucesso!");
    this.submit();
    window.location.href = "login.html";
  }
});
