document.querySelectorAll(".clickable").forEach(el => {
    el.addEventListener("click", function (event) {
        const parentSection = el.closest(".tela"); // pega a seção clicada
        const pool = parentSection.querySelector(".blood-pool"); // pool local
        BloodSplatter(pool, event.clientX, event.clientY);
    });
});

document.getElementById("clean-btn").addEventListener("click", function () {
    CleanBlood();
});
document.getElementById("login-btn").addEventListener("click", function () {
    window.location.href = 'http://localhost:5173/login';
});

function BloodSplatter(pool) {

    const splat = document.createElement("div");
    splat.classList.add("splatters");
    document.body.appendChild(splat);


    const imageURL = getRandomSplatterImage();

    splat.style.maskImage = `url(${imageURL})`;
    splat.style.maskSize = "contain";
    splat.style.maskRepeat = "no-repeat";
    splat.style.maskPosition = "center";
    splat.style.position = "absolute";

    splat.style.width = Math.floor((Math.random() * 100) + 20) + "vw";
    splat.style.height = Math.floor((Math.random() * 100) + 20) + "vh";

    splat.style.left = (Math.random() * 100) - 20 + "vw"; // Random value between 25vw and 75vw
    splat.style.top = (Math.random() * 100) - 20 + "vh";  // Random value between 25vh and 75vh

    splat.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
    
    pool.appendChild(splat);
}

function CleanBlood() {
    let manchas = document.querySelectorAll(".splatters");
    manchas.forEach(m => m.remove());
}

function getRandomSplatterImage() {
    const splatters = [
        '/images/splatter1.png',
        '/images/splatter2.png',
        '/images/splatter3.png',
        '/images/splatter4.png',
        '/images/splatter5.png',
        '/images/splatter6.png',
        '/images/splatter7.png',
        '/images/splatter8.png',
        '/images/splatter9.png',
        '/images/splatter10.png',
        '/images/splatter11.png',
        '/images/splatter12.png',
    ];
    const index = Math.floor(Math.random() * splatters.length);
    return splatters[index];
}