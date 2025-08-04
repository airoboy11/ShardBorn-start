// Wait until DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const charCreation = document.getElementById('char-creation');
  const gameInterface = document.getElementById('game-interface');
  const startBtn = document.getElementById('start-btn');
  const storyBox = document.getElementById('story');
  const inputForm = document.getElementById('input-form');
  const userInput = document.getElementById('user-input');

  let playerData = {
    location: null,
    role: null,
  };

  startBtn.addEventListener('click', () => {
    // Get selected values
    playerData.location = document.getElementById('location').value;
    playerData.role = document.getElementById('role').value;

    // Hide character creation, show game interface
    charCreation.style.display = 'none';
    gameInterface.style.display = 'block';

    // Show intro text based on choices
    let intro = `You awaken in ${playerData.location}, a ${playerData.role} with a destiny yet to be forged.\n`;

    if (playerData.location === "Kholinar") {
      intro += "The storms rage outside the shattered walls of Alethkar’s last bastion.";
    } else if (playerData.location === "Luthadel") {
      intro += "The mists curl around the spires. The Final Empire watches.";
    } else if (playerData.location === "Silverlight") {
      intro += "Worldhoppers pass silently through the alleys of unknown cities.";
    }

    storyBox.textContent = intro + "\n\nWhat will you do?";

    // Focus on input
    userInput.focus();
  });

  inputForm.addEventListener('submit', e => {
    e.preventDefault();
    const command = userInput.value.trim();
    if (!command) return;

    // Show player command
    storyBox.textContent += `\n> ${command}`;

    // Simulate game response
    const response = generateResponse(command, playerData);
    storyBox.textContent += `\n${response}\n`;

    // Scroll down to bottom
    storyBox.scrollTop = storyBox.scrollHeight;

    userInput.value = '';
  });

  function generateResponse(command, playerData) {
    // Simple placeholder for demo logic
    return `The world responds: You said "${command}". The mists stir in ${playerData.location}.`;
  }
});
