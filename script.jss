
const button = document.getElementById("surpriseBtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent =
        "You are someone truly special to me. ❤️";

    button.textContent = "A little more love ♡";
});

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "floating-heart";
    heart.textContent = "♥";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 700);
