





const hangmanGame__button = document.querySelector('.hangmanGame__button')


hangmanGame__button.addEventListener('click', () => {
    hangmanGame__button.style.backgroundColor = 'red'
})


let buttonUsername = document.getElementById("buttonUser");
let playerDiv = document.getElementById("");
let score = 0;
let timer;
let timeLeft = 10;
let tittle = document.getElementById("tittle");
let formDiv = document.getElementById("form_game");
let game = document.getElementById("button_game");


// Función para agregar un nuevo usuario al array y almacenar en localStorage
function agregarUsuario() {
    score = 0;
    timeLeft = 10;

    timer = setInterval(updateTimer, 1000);





    const usernameInput = document.getElementById('name');
    const username = usernameInput.value.trim();
  
    if (username !== '') {
      let usuarios = obtenerUsuarios();
  
      usuarios.push(username);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
  
      usernameInput.value = ''; // Limpiar el campo de entrada
      moveButton()
      mostrarUsuarios();
    }
  }

  function updateTimer(){
    timeLeft--;
    if(timeLeft <= 0){
        endGame()
    }
  }
  
  function moveButton(){
    formDiv.classList.remove("display_flex");
    tittle.classList.remove("display_block");
    formDiv.classList.add("display_none");
    tittle.classList.add("display_none");
    game.classList.add("display_block");
  }

  function endGame(){
    let div = document.getElementById('div_created');
    clearInterval(timer);
    alert("Game ended! Your score is " + score)
    const puntuacion = document.createElement("p");
    localStorage.setItem("score", score);
    let scoreDefinitivo = localStorage.getItem("score");
    puntuacion.textContent = scoreDefinitivo;
    div.appendChild(puntuacion);
    formDiv.classList.add("display_flex");
    tittle.classList.add("display_block");
    formDiv.classList.remove("display_none");
    tittle.classList.remove("display_none");
    game.classList.remove("display_block");
  }

  game.addEventListener("click", () =>{
    score++;
    
  })



  // Función para obtener los usuarios almacenados en localStorage
  function obtenerUsuarios() {
    const usuariosJSON = localStorage.getItem('usuarios');
    return usuariosJSON ? JSON.parse(usuariosJSON) : [];
  }
  
  // Función para mostrar los usuarios en pantalla
  function mostrarUsuarios() {
    const usuariosDiv = document.getElementById('playerDiv');
    const usuarios = obtenerUsuarios();
  
    // Limpiar el contenido anterior
    usuariosDiv.innerHTML = '';
  
    if (usuarios.length > 0) {
      const div = document.createElement('div');
      div.id = "div_created"
      usuarios.forEach((usuario) => {
        const h2 = document.createElement('h2');
        h2.className = "h2_posittion"
        h2.textContent = usuario;
        div.appendChild(h2);
      });
      usuariosDiv.appendChild(div);
    } else {
      usuariosDiv.textContent = 'No hay usuarios guardados.';
    }
  }
  
  // Mostrar los usuarios al cargar la página
  mostrarUsuarios();