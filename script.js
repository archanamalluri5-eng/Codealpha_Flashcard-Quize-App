```javascript
const flashcards = [
    {
        question: "What is HTML?",
        answer: "HTML is used to create web pages."
    },
    {
        question: "What is CSS?",
        answer: "CSS is used for styling web pages."
    },
    {
        question: "What is JavaScript?",
        answer: "JavaScript adds functionality to websites."
    }
];

let currentCard = 0;

function loadCard() {

    document.getElementById("question").innerText =
        flashcards[currentCard].question;

    document.getElementById("answer").innerText =
        flashcards[currentCard].answer;

    document.getElementById("answer").classList.add("hidden");
}

function showAnswer() {
    document.getElementById("answer").classList.remove("hidden");
}

function nextCard() {

    currentCard++;

    if(currentCard >= flashcards.length){
        currentCard = 0;
    }

    loadCard();
}

function prevCard() {

    currentCard--;

    if(currentCard < 0){
        currentCard = flashcards.length - 1;
    }

    loadCard();
}

loadCard();
```
