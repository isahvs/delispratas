document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value;

  // Mensagens de erro
  const usernameError = document.getElementById("username-error");
  const passwordError = document.getElementById("password-error");

  // Resetar mensagens
  usernameError.textContent = "";
  passwordError.textContent = "";

  let temErro = false;

  if (username === "") {
    usernameError.textContent = "O nome de usuário é obrigatório.";
    temErro = true;
  }

  if (password === "") {
    passwordError.textContent = "A senha é obrigatória.";
    temErro = true;
  }

  if (!temErro) {
    alert("Login bem-sucedido!");
    window.location.href = "index.html";
  }
});
