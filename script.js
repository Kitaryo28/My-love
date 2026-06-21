// ======================
// PASSWORD
// ======================

const PASSWORD = "i love you";

// ======================
// LOVE LETTER
// ======================

const LETTER = `Hey Darling ☕,

Sometimes I wonder how someone can become so important without even trying.

Yet somehow... you did.

You became the reason I smile at random moments,
and the reason ordinary days feel special.

Even on the busiest days,
your thoughts find a way back to me.

Whenever life feels heavy,
thinking about you makes everything feel lighter.

Like a warm cup of coffee
on a peaceful evening.

You are not just someone I care about.

You became a part of my favourite memories,
my comfort,
and my happiest thoughts.

If I could choose one place to stay forever,

it would be somewhere beside you,
watching the sky,
sharing coffee,
and talking about absolutely nothing.

And even if one day I became stone 🪨,

unable to move,
unable to speak,

my feelings would still stay exactly the same.

Because some hearts never stop loving.

They simply keep loving quietly forever.

— Kitaryo ♡`;

// ======================
// HEARTS
// ======================

window.onload = () => {

    for(let i = 0; i < 20; i++){

        const heart =
        document.createElement("div");

        heart.className = "heart";

        heart.style.left =
        Math.random() * 100 + "vw";

        heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

        document.body.appendChild(heart);
    }

    setupNoButton();
};

// ======================
// OPEN MAIL
// ======================

function openMail(){

    const value =
    document
    .getElementById("password")
    .value
    .trim()
    .toLowerCase();

    if(value !== PASSWORD){

        alert("💔 Wrong Password");
        return;
    }

    document
    .getElementById("lockScreen")
    .classList
    .add("hidden");

    document
    .getElementById("loadingScreen")
    .classList
    .remove("hidden");

    setTimeout(() => {

        document
        .getElementById("loadingScreen")
        .classList
        .add("hidden");

        document
        .getElementById("mailScreen")
        .classList
        .remove("hidden");

        startTyping();

    }, 1800);
}

// ======================
// TYPEWRITER
// ======================

function startTyping(){

    const letter =
    document.getElementById("letter");

    letter.textContent = "";

    let i = 0;

    const speed = 15;

    const typing =
    setInterval(() => {

        letter.textContent +=
        LETTER.charAt(i);

        i++;

        if(i >= LETTER.length){

            clearInterval(typing);

            document
            .getElementById("askBox")
            .classList
            .remove("hidden");
        }

    }, speed);
}

// ======================
// YES BUTTON
// ======================

function sayYes(){

    document
    .getElementById("askBox")
    .classList
    .add("hidden");

    const box =
    document.getElementById("replyBox");

    box.innerHTML = `
    💖 Darling,<br><br>

    You just made this letter complete.<br><br>

    Even if time stopped,<br>
    even if the stars disappeared,<br><br>

    I would still choose you.<br><br>

    ☕💑 Forever & Always ♡
    `;

    box.classList.remove("hidden");
}

// ======================
// NO BUTTON RUNAWAY
// ======================

function setupNoButton(){

    const noBtn =
    document.getElementById("noBtn");

    if(!noBtn) return;

    function moveButton(){

        const x =
        (Math.random() * 180) - 90;

        const y =
        (Math.random() * 80) - 40;

        noBtn.style.transform =
        `translate(${x}px, ${y}px)`;

        noBtn.style.transition =
        ".2s ease";
    }

    noBtn.addEventListener(
        "mouseenter",
        moveButton
    );

    noBtn.addEventListener(
        "touchstart",
        moveButton
    );
}

// ======================
// ENTER
