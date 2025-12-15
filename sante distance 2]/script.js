function register() {
  let email = document.getElementById("regEmail").value;
  let password = document.getElementById("regPassword").value;

  if (email === "" || password === "") {
    alert("عبي المعطيات الكل");
    return;
  }

  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  alert("Inscription réussie !");
}

function login() {
  let email = document.getElementById("logEmail").value;
  let password = document.getElementById("logPassword").value;

  let savedEmail = localStorage.getItem("email");
  let savedPassword = localStorage.getItem("password");

  if (email === savedEmail && password === savedPassword) {
    alert("Connexion réussie !");
  } else {
    alert("Email ou mot de passe incorrect");
  }
}
