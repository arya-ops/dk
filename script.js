document.addEventListener("DOMContentLoaded", () => {

    const pages = document.querySelectorAll(".page");
    const startBtn = document.getElementById("startBtn");
    const music = document.getElementById("bgMusic");

    let currentPage = 0;
    let slideshow = null;
    let heartInterval = null;
    let started = false;

    function showPage(index) {
        pages.forEach(page => page.classList.remove("active"));
        pages[index].classList.add("active");
    }

    function nextPage() {

        if (currentPage >= pages.length - 1) {
            clearInterval(slideshow);
            clearInterval(heartInterval);
            return;
        }

        currentPage++;
        showPage(currentPage);
    }

    function createHearts() {

        heartInterval = setInterval(() => {

            const heart = document.createElement("div");
            heart.className = "heart";

            const emojis = ["🤍","🤎","💕","💖","🌸","✨"];

            heart.textContent =
                emojis[Math.floor(Math.random()*emojis.length)];

            heart.style.left = Math.random()*100 + "vw";
            heart.style.fontSize = (18 + Math.random()*18) + "px";

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            },6000);

        },400);

    }

    startBtn.addEventListener("click", async () => {

        if(started) return;
        started = true;

        try{
            music.volume = 0.7;
            await music.play();
        }catch(e){
            console.log(e);
        }

        currentPage = 1;
        showPage(currentPage);

        createHearts();

        slideshow = setInterval(nextPage,7000);

    });

});
