let results = ["", ""];
let playerNames = ["Jugador 1", "Jugador 2"];

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


  if (results.indexOf("Ganador") !== -1) {
    // Mostrar el aviso 
    document.getElementById("congratulations-modal").classList.add("active");
    document.getElementById("result" + playerIndex).textContent = "Resultado: " + resultMessage;
    document.getElementById("result" + (3 - playerIndex)).textContent = "Resultado: " + playerNames[2 - playerIndex] + ": " + computerChoice;
    document.getElementById("winner").textContent = "Ganador: " + playerNames[results.indexOf("Ganador")];
    document.getElementById("loser").textContent = "Perdedor: " + playerNames[results.indexOf("Perdedor")];
    
  }
}
function resetGame() {
    results = ["", ""];
    document.getElementById("result1").textContent = "Resultado: Esperando...";
    document.getElementById("result2").textContent = "Resultado: Esperando...";
    document.getElementById("winner").textContent = "Ganador: ";
    document.getElementById("loser").textContent = "Perdedor: ";
  
    // Ocultar el aviso modal
    document.getElementById("congratulations-modal").classList.remove("active");
  }