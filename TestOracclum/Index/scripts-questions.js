
const buttons = document.querySelectorAll('.person-btn');
const askBtn = document.getElementById('ask-question');
const infoBox = document.getElementById('person-info');
const infoImg = document.getElementById('info-img');
const infoText = document.getElementById('info-text');

let selectedPerson = null;

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedPerson = btn.dataset.person;

        //info box
        const person = people[selectedPerson];
        infoImg.src = person.img;
        infoImg.alt = person.name;
        infoText.innerHTML = `<strong>${person.name}</strong><br>${person.info}`;
        infoBox.classList.remove('hidden');

    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('questionForm');
    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const input = form.querySelector('.question-input');
        const question = input.value;

        if (!question.trim()) {
            alert('Por favor, digite uma pergunta.');
            return;
        }

        event.preventDefault();

        if (selectedPerson === "1") {
            username = "RobertKirkman";
        }
        else if (selectedPerson === "2") {
            username = "StevenYeun";
        }
        else if (selectedPerson === "3") {
            username = "JohnPaesano";
        }

        try {
            await fetch('http://localhost:3000/questions/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    question: question
                })
            });
            // let error = null;
            inputValidationStyle(input);


        } catch (e) {
            console.error('Erro ao enviar pergunta:', e);
            inputValidationStyle(input,e);
            alert('Ocorreu um erro ao enviar a pergunta. Por favor, tente novamente.');
        }
    });
});


function inputValidationStyle(input, error) {
    if (error) {
        input.style.background = 'red';
        input.value = "Falha!";
        input.disabled = true;
        setTimeout(() => {
            input.style.background = 'transparent';
            input.disabled = false;
            input.value = "";

        }, 1000);

    }
    else {
        input.style.background = 'green';
        input.value = "Sucesso!";
        input.disabled = true;
        setTimeout(() => {
            input.style.background = 'transparent';
            input.disabled = false;
            input.value = "";

        }, 1000);
    }
}

const people = {
    1: {
        name: "Robert Kirkman   (Autor/ Author)",
        img: "images/users/kirkmanplchd.png",
        info: "Robert Kirkman (/ˈkɜːrkmən/; born November 30, 1978)[3] is an American comic book writer, screenwriter, and producer. He is best known for co-creating The Walking Dead, Fear the Walking Dead, Invincible, Tech Jacket, Outcast, Oblivion Song, and Fire Power for Image Comics, in addition to writing Ultimate X-Men, Irredeemable Ant-Man and Marvel Zombies for Marvel Comics. He has also collaborated with Image Comics co-founder Todd McFarlane on the series Haunt."
    },
    2: {
        name: "Steven Yeun  (Dublador/ Voice actor)",
        img: "images/users/stevenYeun.jpg",
        info: "Yeun Sang-Yeop[1] (Korean: 연상엽; born December 21, 1983), known professionally as Steven Yeun (/jʌn/ YUHN), is an American actor. Yeun initially rose to prominence for playing Glenn Rhee in the television series The Walking Dead (2010–2016). He earned critical acclaim for the films Burning (2018) and Minari (2020). The latter earned him a nomination for the Academy Award for Best Actor, making him the first Asian American actor to be nominated.[2] Time magazine named him one of the 100 most influential people in the world in 2021.[3] In 2023, he starred in the dark comedy series Beef (2023), for which he won two Primetime Emmy Awards and a Golden Globe Award."
    },
    3: {
        name: "John Paesano     (Diretor de musica / Music director ) ",
        img: "images/users/JohnP.jpg",
        info: "John Paesano (born July 2, 1977) is an American composer working primarily in film, television, and video games. He is known for collaborating with director Wes Ball on the Maze Runner film trilogy and Kingdom of the Planet of the Apes, as well as composing for the Marvel Television series Daredevil and The Defenders. As a video game composer, he has contributed music to the acclaimed titles"
    }
};