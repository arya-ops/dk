// All scrapbook pages
const pages = document.querySelectorAll(".page");
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");

let currentPage = 0;
let slideshow = null;
let heartInterval = null;
let started = false;

// Start scrapbook
startBtn.addEventListener("click", () => {
    if (started) return; // prevent double clicks
    started = true;

    // Play music safely
    music.volume = 0.7;
    music.play().catch(err => {
        console.log("Music play blocked:", err);
    });

    // Hide cover page
    pages[0].classList.remove("active");

    // Show first content page
    currentPage = 1;
    pages[currentPage].classList.add("active");

    // Start hearts animation
    createHearts();

    // Auto page slideshow
    slideshow = setInterval(nextPage, 7000);
});

// Go to next page
function nextPage() {
    if (currentPage >= pages.length - 1) {
        clearInterval(slideshow);
        clearInterval(heartInterval);
        return;
    }

    pages[currentPage].classList.remove("active");
    currentPage++;
    pages[currentPage].classList.add("active");
}

// Floating hearts
function createHearts() {
    heartInterval = setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";

        const emojis = ["🤍", "🤎", "💖", "💕", "✨", "🌸"];
        heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (18 + Math.random() * 22) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 400);
}
