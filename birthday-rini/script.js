/* ================================= */
/* MUSIC */
/* ================================= */

const music =
    document.getElementById("music");


let musicStarted = false;


/* ================================= */
/* START EXPERIENCE */
/* ================================= */

function startExperience() {

    const music = document.getElementById("music");

    music.volume = 0.7;

    music.currentTime = 0;

    const playPromise = music.play();

    if (playPromise !== undefined) {

        playPromise
            .then(() => {

                console.log("Musik berhasil dimainkan ❤️");

            })
            .catch((error) => {

                console.log(
                    "Musik gagal dimainkan:",
                    error
                );

                alert(
                    "Musik belum bisa dimainkan. Pastikan file birds.mp3 ada di folder music."
                );

            });

    }

    document
        .querySelector(".intro")
        .scrollIntoView({
            behavior: "smooth"
        });

    createHearts(20);
}

/* ================================= */
/* ENVELOPE */
/* ================================= */

function openEnvelope(){

    const envelope =
        document.getElementById(
            "envelope"
        );


    envelope.classList.toggle(
        "open"
    );


    createHearts(10);

}


/* ================================= */
/* CANDLES */
/* ================================= */

function blowCandles(){

    const cake =
        document.querySelector(
            ".cake"
        );


    cake.classList.add(
        "blown"
    );


    const result =
        document.getElementById(
            "wish-result"
        );


    result.innerHTML =
        `
        ✨ Semoga semua harapan baikmu
        menemukan jalannya.

        <br>

        Dan semoga aku masih ada di sana
        untuk melihatnya menjadi nyata. ❤️
        `;


    createFireworks();

}


/* ================================= */
/* HEART ANIMATION */
/* ================================= */

function createHearts(amount){

    for(

        let i=0;

        i<amount;

        i++

    ){

        const heart =
            document.createElement(
                "div"
            );


        heart.innerHTML =
            [
                "❤️",
                "💖",
                "💕",
                "💗"
            ]
            [
                Math.floor(
                    Math.random()*4
                )
            ];


        heart.style.position =
            "fixed";


        heart.style.left =
            Math.random()*100 +
            "vw";


        heart.style.top =
            "-30px";


        heart.style.fontSize =
            (
                15 +

                Math.random()*25

            ) +

            "px";


        heart.style.zIndex =
            "1000";


        heart.style.pointerEvents =
            "none";


        const duration =
            4 +

            Math.random()*5;


        heart.style.animation =
            `
            heartFall
            ${duration}s
            linear
            forwards
            `;


        document.body.appendChild(
            heart
        );


        setTimeout(

            ()=>{

                heart.remove();

            },

            duration*1000

        );

    }

}


/* ================================= */
/* HEART CSS */
/* ================================= */

const heartStyle =
document.createElement(
    "style"
);


heartStyle.innerHTML = `

@keyframes heartFall{

    0%{

        transform:

            translateY(-50px)

            rotate(0deg);

        opacity:1;

    }

    100%{

        transform:

            translateY(110vh)

            rotate(360deg);

        opacity:0;

    }

}

`;


document.head.appendChild(
    heartStyle
);


/* ================================= */
/* FIREWORKS */
/* ================================= */

function createFireworks(){

    const symbols = [

        "✨",

        "💖",

        "⭐",

        "❤️",

        "🌟"

    ];


    for(

        let i=0;

        i<70;

        i++

    ){

        const firework =
            document.createElement(
                "div"
            );


        firework.className =
            "firework";


        firework.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        firework.style.left =
            "50%";


        firework.style.top =
            "50%";


        firework.style.setProperty(

            "--x",

            (
                Math.random()*900 -

                450

            ) +

            "px"

        );


        firework.style.setProperty(

            "--y",

            (
                Math.random()*700 -

                350

            ) +

            "px"

        );


        firework.style.animationDelay =
            (
                Math.random()*.8
            ) +

            "s";


        document
            .getElementById(
                "fireworks"
            )
            .appendChild(
                firework
            );


        setTimeout(

            ()=>{

                firework.remove();

            },

            3500

        );

    }


    createHearts(30);

}


/* ================================= */
/* AUTOMATIC HEARTS */
/* ================================= */

setInterval(

    ()=>{

        createHearts(1);

    },

    1200

);


/* ================================= */
/* MUSIC VOLUME */
/* ================================= */

music.volume = 0.65;


/* ================================= */
/* INTERSECTION ANIMATION */
/* ================================= */

const observer =
new IntersectionObserver(

    entries=>{

        entries.forEach(

            entry=>{

                if(
                    entry.isIntersecting
                ){

                    entry.target.classList.add(
                        "show"
                    );

                }

            }

        );

    },

    {

        threshold:.15

    }

);


document
    .querySelectorAll(
        "section"
    )
    .forEach(

        section=>{

            observer.observe(
                section
            );

        }

    );
    /* ================================= */

    // video
    const ourVideo =
    document.getElementById("ourVideo");

ourVideo.addEventListener(
    "play",
    function(){

        music.pause();

    }
);

ourVideo.addEventListener(
    "ended",
    function(){

        music.play();

    }
);