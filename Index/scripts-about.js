function showInvincible(type) {
    const contentBox = document.getElementById("invincible-text");
    const section = document.getElementById("sobre-invincible");
    const slideBg = document.getElementById("invincible-bg");

    let content = "";
    let bgImage = "";

    switch (type) {
        case 'comic':
            content = `A HQ "Invincible" foi criada por Robert Kirkman e Cory Walker em 2003, publicada pela Image Comics. 
            A série rapidamente se destacou pela abordagem madura e realista dos dilemas de super-heróis, misturando ação intensa 
            com desenvolvimento profundo dos personagens. Ela se tornou um marco nos quadrinhos independentes.`;
            bgImage = "url('images/backgrounds/comic.png')";
            break;
    
        case 'tv':
            content = `A série animada de "Invincible" estreou na Amazon Prime em 2021, adaptando fielmente os quadrinhos originais. 
            Com dublagens de alto nível e animação impactante, a série ganhou reconhecimento por seu enredo adulto, cenas gráficas e 
            reviravoltas dramáticas, conquistando fãs novos e antigos.`;
            bgImage = "url('images/backgrounds/tv.webp')";
            break;
    
        case 'plot':
            content = `"Invincible" segue Mark Grayson, um adolescente que herda superpoderes de seu pai, Omni-Man, o herói mais poderoso da Terra. 
            Ao descobrir que o legado de seu pai é mais sombrio do que imaginava, Mark embarca numa jornada de autoconhecimento, enfrentando 
            batalhas que testam sua força física, moral e emocional.`;
            bgImage = "url('images/backgrounds/plot.webp')";
            break;
    }
    
    contentBox.innerHTML = `<p>${content}</p>`;

    slideBg.style.backgroundImage = bgImage;
    slideBg.classList.remove("active");

    void slideBg.offsetWidth;

    slideBg.classList.add("active");

    setTimeout(() => {
        section.style.backgroundImage = bgImage;
        slideBg.classList.remove("active");
    }, 1000);
}

function showInvincibleChar(type) {
    const contentBox = document.getElementById("invincible-text-characters");
    const section = document.getElementById("sobre-invincible-personagens");
    const slideBg = document.getElementById("slide-bg");

    let content = "";
    let bgImage = "";

    switch (type) {
        case 'Omni-Man':
            content = `Omni-Man (Nolan Grayson) é um dos viltrumitas mais poderosos e pai de Mark Grayson. 
            Ele chegou à Terra disfarçado como herói, mas guarda segredos sombrios sobre suas verdadeiras intenções. 
            Sua presença impõe respeito, medo e uma reflexão sobre lealdade e poder.`;
            bgImage = "url('images/backgrounds/omni-man.webp')";
            break;
    
        case 'Mark-Grayson':
            content = `Mark Grayson é o protagonista da série "Invincible". 
            Adolescente comum até descobrir seus poderes, ele precisa lidar com as responsabilidades de ser um herói 
            enquanto enfrenta traições e desafios que vão além da imaginação.`;
            bgImage = "url('images/backgrounds/mark-grayson.png')";
            break;
    
        case 'Debbie-Grayson':
            content = `Debbie Grayson é a mãe de Mark e esposa de Nolan. 
            Humana, forte e emocionalmente resiliente, ela representa o coração da família Grayson, 
            sendo muitas vezes o ponto de equilíbrio em meio ao caos.`;
            bgImage = "url('images/backgrounds/debbie-grayson.webp')";
            break;
    
        case 'Cecil-Stedman':
            content = `Cecil é o diretor da Agência de Defesa Global. 
            Inteligente, estratégico e muitas vezes implacável, ele faz o que for necessário para proteger a Terra, 
            mesmo que suas decisões levantem questões éticas.`;
            bgImage = "url('images/backgrounds/cecil-stedman.png')";
            break;
    
        case 'Guardians-Globe':
            content = `Os Guardiões do Globo são a principal equipe de super-heróis da Terra, com membros variados em poder e personalidade. 
            Após um destino trágico, a equipe é reformulada, dando espaço para novos conflitos e dilemas heroicos.`;
            bgImage = "url('images/backgrounds/guardians-globe.webp')";
            break;
    }
    

    contentBox.innerHTML = `<p>${content}</p>`;

    slideBg.classList.remove("active", "fade-in", "no-transition");
    slideBg.style.transition = "none";
    slideBg.style.left = "-100%";
    slideBg.style.opacity = "0";
    slideBg.style.backgroundImage = bgImage;

    void slideBg.offsetWidth;

    slideBg.style.transition = "";
    slideBg.classList.add("active", "fade-in");

    setTimeout(() => {
        section.style.backgroundImage = bgImage;
        slideBg.classList.remove("active", "fade-in");
        slideBg.classList.add("no-transition");
        slideBg.style.left = "-100%";
        slideBg.style.opacity = "0";
        setTimeout(() => {
            slideBg.classList.remove("no-transition");
        }, 50);
    }, 1000);
}
