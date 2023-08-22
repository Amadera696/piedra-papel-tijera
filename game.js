let results = ["", ""];
let playerNames = ["Jugador 1", "Jugador 2"];
let playerChoices = ["", ""];

function play(playerIndex, playerChoice) {
  const choices = ["piedra", "papel", "tijera"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];  // Simulación elige computadora
  
  let resultMessage = "";

  if (playerChoice === computerChoice) {
    resultMessage = "Empate";
  } else if (
    (playerChoice === "piedra" && computerChoice === "tijera") ||
    (playerChoice === "tijera" && computerChoice === "papel") ||
    (playerChoice === "papel" && computerChoice === "piedra")
  ) {
    resultMessage = playerNames[playerIndex - 1] + " ganó";
    results[playerIndex - 1] = "Ganador";
    results[2 - playerIndex] = "Perdedor";
  } else {
    resultMessage = playerNames[2 - playerIndex] + " ganó";
    results[2 - playerIndex] = "Ganador";
    results[playerIndex - 1] = "Perdedor";
  }

  playerChoices[playerIndex - 1] = playerChoice;
  playerChoices[2 - playerIndex] = computerChoice;

  if (resultMessage !== "Empate") {
    // Mostrar el aviso modal
    document.getElementById("congratulations-modal").classList.add("active");
    
    // Mostrar las elecciones de los jugadores en el aviso modal
    document.getElementById("player1-choice").textContent = "Jugador 1: " + playerChoices[0] + " (" + playerChoice + ")";
    document.getElementById("player2-choice").textContent = "Jugador 2: " + playerChoices[1] + " (" + playerChoices[1] + ")";
    document.getElementById("result" + playerIndex).textContent = "Resultado: " + resultMessage;
    document.getElementById("result" + (3 - playerIndex)).textContent = "Resultado: " + playerNames[2 - playerIndex] + ": " + computerChoice;
    document.getElementById("winner").textContent = "Ganador: " + playerNames[results.indexOf("Ganador")];
    document.getElementById("loser").textContent = "Perdedor: " + playerNames[results.indexOf("Perdedor")];
  }
}

function resetGame() {
  results = ["", ""];
  playerChoices = ["", ""];
  document.getElementById("result1").textContent = "Resultado: Esperando...";
  document.getElementById("result2").textContent = "Resultado: Esperando...";
  document.getElementById("winner").textContent = "Ganador: ";
  document.getElementById("loser").textContent = "Perdedor: ";
  document.getElementById("player1-choice").textContent = "Jugador 1: ";
  document.getElementById("player2-choice").textContent = "Jugador 2: ";
  
  // Ocultar el aviso modal
  document.getElementById("congratulations-modal").classList.remove("active");
}
