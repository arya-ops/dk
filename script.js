document.addEventListener("DOMContentLoaded", () => {

    const pages = document.querySelectorAll(".page");
    const startBtn = document.getElementById("startBtn");
    const music = document.getElementById("bgMusic");

    let currentPage = 0;
    let slideshow;
    let hearts;
    let started = false;

    function showPage(index) {
        pages.forEach(page => page.classList.remove("active"));
        pages[index].classList.add("active");
    }

    function nextPage() {

        if (currentPage >= pages.length - 1) {
            clearInterval(slideshow);
            clearInterval(hearts);
            return;
        }

        currentPage++;
        showPage(currentPage);
    }

    function createHeart() {

        const heart = document.createElement("div");
        heart.className = "heart";

        const emojis = ["🤍", "🤎", "💕", "💖", "🌸", "✨"];

        heart.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.fontSize = `${18 + Math.random() * 18}px`;

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 6000);
    }

    startBtn.addEventListener("click", async () => {

        if (started) return;
        started = true;

        music.volume = 0.7;

        try {
            await music.play();
        } catch (e) {
            console.log("Music autoplay blocked.");
        }

        currentPage = 1;
        showPage(currentPage);

        hearts = setInterval(createHeart, 350);

        slideshow = setInterval(nextPage, 7000);
    });

    document.addEventListener("keydown", e => {

        if (!started) return;

        if (e.key === "ArrowRight") {
            nextPage();
        }

        if (e.key === "ArrowLeft" && currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }

    });

    document.addEventListener("visibilitychange", () => {

        if (document.hidden) {

            clearInterval(slideshow);

        } else if (started && currentPage < pages.length - 1) {

            slideshow = setInterval(nextPage, 7000);

        }

    });

});
