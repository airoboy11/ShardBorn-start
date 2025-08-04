let state = {
    world: "",
    background: "",
    flags: {},
    inventory: []
};

function startGame() {
    state.world = document.getElementById("worldSelect").value;
    state.background = document.getElementById("backgroundSelect").value;
    document.getElementById("startModal").style.display = "none";
    addOutput(`You awaken in ${state.world}, a ${state.background} caught in something greater than yourself...`);
}

function handleInput() {
    const input = document.getElementById("gameInput");
    const value = input.value.trim();
    if (!value) return;
    addOutput("> " + value);
    respondToInput(value);
    input.value = "";
}

function addOutput(text) {
    const output = document.getElementById("gameOutput");
    output.innerText += "\n" + text;
    output.scrollTop = output.scrollHeight;
}

function respondToInput(text) {
    const lc = text.toLowerCase();
    if (lc.includes("look")) {
        addOutput("You scan the surroundings. The air feels charged with Investiture.");
    } else if (lc.includes("talk")) {
        addOutput("You attempt to speak. A figure emerges from the mist, listening...");
    } else if (lc.includes("go")) {
        addOutput("You step into the unknown, feeling the pull of distant forces.");
    } else {
        addOutput("Nothing happens. The Shards watch silently.");
    }
}
