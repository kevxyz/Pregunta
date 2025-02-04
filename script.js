const messages = [
    "Segura?",
    "Muy segura??",
    "Totalmente Segura?",
    "Porfi",
    "porfi porfi",
    "Si decis que no, lloro",
    "Me voy a poner muy triste",
    "ME VOY A PONER MUY MUY MUY TRISTE...",
    "Bueno... no pregunto mas...",
    "MENTIRA, DECI QUE SI PORFA ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}