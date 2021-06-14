// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

// ACTIVIDAD

// Paso a paso:

// 1) Escuchar el evento necesario para reaccionar cuando el usuario
// haga click en el boton iniciar sesion.

// 2) El proceso de inicio de sesion debera tener una demora de 3 segundos.
// Deberas agregar la funcion correspondiente para simular dicha demora.

// 3) Durante el tiempo indicado anteriormente, se debera mostrar el mensaje "Iniciando sesion..."

// 4) A partir de los inputs ingresados en el formulario, se deberan realizar las siguientes validaciones:
// 1) Que el primer input sea un email valido.
// 2) Que la contrasena tenga al menos 5 caracteres.
// 3) Que los datos ingresados corresponden a una
// persona que se encuentre registrada en la base de datos.
// En caso de que alguna de las validaciones no sea exitosa,
// se debera mostrar un mensaje de error que diga "Alguno de los datos ingresados son incorrectos"

// 5) En caso de que los datos ingresados sean correctos, se debera ocultar el formulario y mostrar un mensaje de
// bienvenida al usuario.

const loginBtn = document.querySelector(".login-btn");
const errorContainer = document.querySelector("#error-container");
const loader = document.querySelector("#loader");

function validarUsuario() {
  const email = document.querySelector("#email-input").value;
  const password = document.querySelector("#password-input").value;
  const errorMsj = `<small>Alguno de los datos ingresados son incorrectos</small>`;
  const main = document.querySelector("main");

  const usuarioExistente = baseDeDatos.usuarios.find(
    (usuario) => usuario.email === email
  );

  loader.classList.add("hidden");

  if (!usuarioExistente) {
    errorContainer.innerHTML = errorMsj;
    errorContainer.classList.remove("hidden");
    return;
  }

  if (usuarioExistente.password === password) {
    main.innerHTML = "<h1> Bienvenido al sitio 😀 </h1>";
  } else {
    errorContainer.innerHTML = errorMsj;
    errorContainer.classList.remove("hidden");
    return;
  }
}
loginBtn.addEventListener("click", () => {
  loader.classList.remove("hidden");
  errorContainer.classList.add("hidden");
  setTimeout(() => {
    validarUsuario();
  }, 3000);
});
