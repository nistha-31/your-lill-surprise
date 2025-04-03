// Envelope Animation
function openEnvelope() {
    document.getElementById('floatingHearts').innerHTML = "";
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.getElementById('floatingHearts').appendChild(heart);
    }

    setTimeout(() => {
        document.getElementById('messageBox').classList.remove("hidden");
    }, 2000);
}

// Love Letter Typing Effect
function revealLetter() {
    let letterText = "EK CHOTI SI PREM PATRAA❤️";
    let letterBox = document.getElementById('letterBox');
    let loveLetter = document.getElementById('loveLetter');

    letterBox.classList.remove("hidden");
    loveLetter.innerHTML = "";

    let i = 0;
    function typeWriter() {
        if (i < letterText.length) {
            loveLetter.innerHTML += letterText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();
}

// Love Question Interaction
let noButtonTexts = [
    "Are you sureeee???",
    "Pakka wala sure???",
    "Sachii mai pakka wala suree bachaaa??",
    "Bachaaa pleaseee naaaa !!!!",
    "Thodaa saa aurr soch lijiyeeeee naaa",
    "Mujhe bhttt buda lagegaaaa",
    "Mujhe bhtttt bhtttt buda lagegaaa",
    "Bhttttttttttt bhttttttttt bhtttt hi zyadaaaa buda lagegaaa😭"
];
let noClickCount = 0;

function loveAccepted() {
    alert("I knew you love me cutuuuuuu! 💖");
}

function loveDeclined() {
    let noBtn = document.getElementById('noBtn');
    let yesBtn = document.getElementById('yesBtn');

    if (noClickCount < noButtonTexts.length) {
        noBtn.innerText = noButtonTexts[noClickCount];
        noClickCount++;
        yesBtn.style.transform = `scale(${1 + noClickCount * 0.2})`;
    } else {
        noBtn.style.display = "none";
        yesBtn.style.transform = "scale(3)";
        setTimeout(() => {
            alert("Mujhe pata hi tha ki you lovee meeeee pagluuu🙈");
        }, 500);
    }
}
