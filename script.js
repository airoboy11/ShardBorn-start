
const log = document.getElementById("game-log");
const input = document.getElementById("player-input");

function appendToLog(text) {
  const p = document.createElement("p");
  p.textContent = text;
  log.appendChild(p);
  log.scrollTop = log.scrollHeight;
}

function sendInput() {
  const userInput = input.value.trim();
  if (!userInput) return;
  appendToLog("> " + userInput);
  input.value = "";

  // Placeholder AI logic
  setTimeout(() => {
    appendToLog("The world responds: " + mockResponse(userInput));
  }, 500);
}

function mockResponse(input) {
  return "You said: '" + input + "'. Something happens in the mists...";
}
