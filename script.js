// ======================
// SETTINGS
// ======================

const PASSWORD = "i love you";

const LETTER = [

`Hey Darling ☕,

Sometimes I wonder how someone can become so important without even trying.

Yet somehow...
you did.`,

`You became the reason I smile at random moments,
and the reason ordinary days feel special.

Even on the busiest days,
your thoughts find a way back to me.`,

`Whenever life feels heavy,
thinking about you makes everything feel lighter.

Like a warm cup of coffee
on a cold evening.`,

`You are not just someone I care about.

You became a part of my favourite memories,
my comfort,
and my happiest thoughts.`,

`If I could choose one place to stay forever,

it would be somewhere beside you,
watching the sky,
sharing coffee,
and talking about absolutely nothing.`,

`And even if one day I became stone 🪨,

unable to move,
unable to speak,

my feelings would still stay exactly the same.`,

`Because some hearts never stop loving.

They simply keep loving quietly forever.

— Kitaryo ♡`
];

// ======================
// FLOATING HEARTS
// ======================

const heartsContainer = document.getElementById("hearts");

for(let i = 0; i < 20; i++){

const heart = document.createElement("div");

heart.className = "heart";

heart.style.left =
Math.random() * 100 + "vw";

heart.style.animationDuration =
(5 + Math.random() * 5) + "s";

heart.style.opacity =
Math.random() * 0.4;

document.body.appendChild(heart);

}

// ======================
// OPEN MAIL
// ======================

function openMail(){

const input =
document.getElementById("password");

const value =
input.value.trim().toLowerCase();

if(value !== PASSWORD){

input.style.border =
"2px solid #ff5b8a";

setTimeout(()=>{
input.style.border = "none";
},600);

return;

}

// hide password
document
.getElementById("lockScreen")
.classList.add("hidden");

// loading screen
document
.getElementById("loadingScreen")
.classList.remove("hidden");

// fake loading
setTimeout(()=>{

document
.getElementById("loadingScreen")
.classList.add("hidden");

document
.getElementById("mailScreen")
.classList.remove("hidden");

typeLetter();

},1800);

}

// enter key support
document.addEventListener("keydown",e=>{

if(e.key==="Enter"){

const lock =
document.getElementById("lockScreen");

if(!lock.classList.contains("hidden")){
openMail();
}

}

});

// ======================
// TYPEWRITER
// ======================

let paragraph = 0;
let charIndex = 0;

function typeLetter(){

const letter =
document.getElementById("letter");

letter.textContent = "";

paragraph = 0;
charIndex = 0;

typeNext();

}

function typeNext(){

const letter =
document.getElementById("letter");

if(paragraph >= LETTER.length){

document
.getElementById("askBox")
.classList.remove("hidden");

return;

}

if(charIndex < LETTER[paragraph].length){

letter.textContent +=
LETTER[paragraph][charIndex];

charIndex++;

setTimeout(typeNext,25);

}else{

letter.textContent += "\n\n";

paragraph++;
charIndex = 0;

setTimeout(typeNext,500);

}

}

// ======================
// YES BUTTON
// ======================

function sayYes(){

document
.getElementById("askBox")
.classList.add("hidden");

const box =
document.getElementById("replyBox");

box.innerHTML = `

💖 Darling,

You just made this letter complete.

Even if time stopped,
even if the stars disappeared,

I would still choose you.

☕💑 Forever and Always ♡

`;

box.classList.remove("hidden");

}

// ======================
// RUNAWAY NO BUTTON
// ======================

const noBtn =
document.getElementById("noBtn");

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
"mouseover",
moveButton
);

noBtn.addEventListener(
"touchstart",
moveButton
);
