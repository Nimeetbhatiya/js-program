const quotes = [
    { "quote": "The only limit to our realization of tomorrow is our doubts of today.", "author": "Franklin D. Roosevelt" },
    { "quote": "In the middle of every difficulty lies opportunity.", "author": "Albert Einstein" },
    { "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.", "author": "Winston Churchill" },
    { "quote": "Do not go where the path may lead, go instead where there is no path and leave a trail.", "author": "Ralph Waldo Emerson" },
    { "quote": "Happiness is not something ready made. It comes from your own actions.", "author": "Dalai Lama" },
    { "quote": "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.", "author": "A. P. J. Abdul Kalam" }
];

const generateBtn = document.getElementById("quoteBtn");
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const errorMessage = document.getElementById("error-mess");
const quoteContainer = document.getElementById("quote-box");
const autogenerate = document.getElementById("autogenerate");

let autoGenerateInterval;

function displayQuote() {
    try {
        let randomIndex = Math.floor(Math.random() * quotes.length);
        let randomQuote = quotes[randomIndex];

        quoteContainer.style.transform = 'scale(1,1)';
        setTimeout(() => quoteContainer.style.transform = 'scale(1)', 300);

        quoteElement.style.opacity = 0;
        setTimeout(() => {
            quoteElement.textContent = randomQuote.quote;
            authorElement.textContent = `- ${randomQuote.author}`;
            quoteElement.style.opacity = 1;
        }, 500);

        errorMessage.textContent = '';
    } catch (error) {
        errorMessage.textContent = error;
    }
}

generateBtn.addEventListener("click", displayQuote);

autogenerate.addEventListener("click", () => {
    if (autogenerate.textContent === "Stop auto-generate") {
        clearInterval(autoGenerateInterval);
        autogenerate.textContent = "Start auto-generate";
    } else {
        autoGenerateInterval = setInterval(displayQuote, 3000);
        autogenerate.textContent = "Stop auto-generate";
    }
});

