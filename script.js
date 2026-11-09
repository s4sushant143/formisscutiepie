
// PAGE NAVIGATION
function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// FLOATING HEARTS
function createHeart() {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.innerHTML = "♥";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 600);

// PERSONAL LOVE LETTER
const letterLines = [
    "There are some things I don't say often enough...",
    "You have become one of the most beautiful parts of my life.",
    "Your smile has a way of making even an ordinary day special.",
    "I love the little things about you, even the ones you don't notice.",
    "I hope life gives you every beautiful thing your heart wishes for.",
    "And I hope you always remember how incredibly special you are to me. ❤️"
];

let letterIndex = 0;

function revealLetter() {
    if (letterIndex < letterLines.length) {
        document.getElementById("letterLine").textContent =
            letterLines[letterIndex];

        letterIndex++;

        document.getElementById("letterCounter").textContent =
            letterIndex + " / " + letterLines.length;
    }

    if (letterIndex === letterLines.length) {
        document.getElementById("letterNext").classList.remove("hidden");
        document.querySelector("#letter .main-btn").textContent =
            "Letter completed ❤️";
    }
}

// SECRET MESSAGES
const secrets = [
    "If you ever have a bad day, remember that someone is always be therefor you jaaneman ❤️",
    "Your smile is genuinely one of my favourite things in this world.",
    "Even the smallest moments with you are perciousss to me jaan",
    "No matter how's many birthdays pass abhi tk ,but I hope I get to celebrate reamaining with you."
];

let unlockedSecrets = 0;

function openSecret(index) {
    const output = document.getElementById("secretMessage");

    if (index > unlockedSecrets) {
        output.textContent =
            "A little patience, Miss Cutie Pie! Open the envelopes in order. 💌";
        return;
    }

    if (index < unlockedSecrets) {
        output.textContent = secrets[index];
        return;
    }

    output.textContent = secrets[index];
    unlockedSecrets++;

    const buttons = document.querySelectorAll(".secret");
    buttons[index].innerHTML = "❤️<span>Opened</span>";
    buttons[index].disabled = true;

    if (unlockedSecrets === secrets.length) {
        output.textContent +=
            " areyy re pagl ladki tune open krdie ye toh secret the shittt ❤️";
    }
}

// REASONS WHY I LOVE YOU
const reasons = [
    "Because your smile can make my entire day better.",
    "Because you make ordinary moments feel special.",
    "Because of the way you are, without pretending to be anyone else.",
    "Because talking to you is one of my favourite things.",
    "Because you have your own little magic.",
    "Because even the smallest memories with you matter to me.",
    "Because I love seeing you happy and achieving your dreams.",
    "sirf itne hi reason ni h pagl h voh toh yha space itna h😭"
];

let reasonIndex = 0;

function nextReason() {
    if (reasonIndex < reasons.length) {
        document.getElementById("reasonText").textContent =
            reasons[reasonIndex];

        reasonIndex++;

        document.getElementById("reasonCount").textContent =
            reasonIndex + " / " + reasons.length;
    }

    if (reasonIndex === reasons.length) {
        document.querySelector("#reasons .main-btn").textContent =
            "All my reasons ❤️";

        document.getElementById("reasonNext").classList.remove("hidden");
    }
}

// BACKGROUND MUSIC
let musicPlaying = false;

async function toggleMusic() {
    const music = document.getElementById("bgMusic");
    const button = document.getElementById("musicBtn");

    if (!musicPlaying) {
        try {
            await music.play();
            musicPlaying = true;
            button.textContent = "♫ Music playing";
        } catch (error) {
            button.textContent = "Tap to play music";
        }
    } else {
        music.pause();
        musicPlaying = false;
        button.textContent = "♫ Play music";
    }
}

// BIRTHDAY CAKE
function blowCandles() {
    document.getElementById("flame").classList.add("out");

    document.getElementById("cakeMessage").textContent =
        "console.log( YOU only have to blow candle babe wish mai phle hi mang chuka hu tu bhi toh meri h ky mera ky tera😁 ❤️)";

    document.querySelector("#cake .main-btn").textContent =
        "Wish made! ✨";

    document.getElementById("cakeNext").classList.remove("hidden");

    // A little birthday celebration
    for (let i = 0; i < 25; i++) {
        setTimeout(createHeart, i * 100);
    }
}

// FINAL VIDEO REVEAL
function revealVideo() {
    const container = document.getElementById("videoContainer");
    const button = document.getElementById("videoRevealBtn");

    container.classList.remove("hidden");
    button.classList.add("hidden");

    const video = document.getElementById("birthdayVideo");

    video.play().catch(() => {
        // If playback is blocked, the user can press play manually.
    });
}

console.log("YOU only have to blow candle babe wish mai phle hi mang chuka hu tu bhi toh meri h ky mera ky tera😁 ❤️");
