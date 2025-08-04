document.getElementById("input-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const inputField = document.getElementById("user-input");
  const storyBox = document.getElementById("story");
  const userInput = inputField.value.trim();

  if (userInput === "") return;

  // Display user input
  const userParagraph = document.createElement("p");
  userParagraph.innerHTML = `> ${userInput}`;
  userParagraph.style.color = "#76c7c0";
  storyBox.appendChild(userParagraph);

  // Simulated backend response
  const worldParagraph = document.createElement("p");
  worldParagraph.innerHTML = `The world responds: "${generateFakeResponse(userInput)}"`;
  storyBox.appendChild(worldParagraph);

  storyBox.scrollTop = storyBox.scrollHeight;
  inputField.value = "";
});

function generateFakeResponse(input) {
  // This simulates a response based on input
  const templates = [
    `You feel a strange pull as you say "${input}".`,
    `The wind whispers back: "${input}"...`,
    `Your words echo: "${input}". Something stirs.`,
    `A light flickers as you say "${input}".`
  ];
  return templates[Math.floor(Math.random() * templates.length)];
}
