const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");

const messages = [
    "You are someone's favorite person to sit next to.",
    "The thing you are building counts, even half finished.",
    "You are allowed to be a beginner for as long as you need.",
    "Someone is going to love what you make with this.",
    "Hot chocolate tastes better after a hard day. You've earned one.",
    "You ask good questions. That is a the whole skill.",
    "Your footprint will always leave a mark, even when the snow melts away.",
    "Be the warmth in a cold winter.",
    "When it's the spirit of giving, remember to give to yourself too.",
    "You're as beautiful as a Christmas morning.",
    "Happy Holiday Hacking!"
];

button.addEventListener("click", () => {
    globe.classList.add("shaking");
    setTimeout(() => globe.classList.remove("shaking"), 600);

    const pick = Math.floor(Math.random() * messages.length);
    message.textContent = messages[pick];
});