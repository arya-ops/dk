// All scrapbook pages
const pages = document.querySelectorAll(".page");
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");

let currentPage = 0;
let slideshow;

// Start scrapbook
startBtn.addEventListener("click", () => {

    // Play music
    music.play();

    // Open first page
    pages[0].classList.remove("active");

    currentPage = 1;

    pages[currentPage].classList.add("active");

    // Floating hearts
    createHearts();

    // Auto page turn
    slideshow = setInterval(nextPage, 7000);

});

// Go to next page
function nextPage() {

    if (currentPage >= pages.length - 1) {
        clearInterval(slideshow);
        return;
    }

    pages[currentPage].classList.remove("active");

    currentPage++;

    pages[currentPage].classList.add("active");

}

// Floating hearts
function createHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";

        const hearts = ["🤍","🤎","💖","💕","✨","🌸"];

        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize = (20 + Math.random() * 20) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);

    }, 400);

}