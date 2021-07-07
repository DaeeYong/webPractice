const quotes = [
    {
        quote : "Do the next right things",
        author : "Anna"
    },
    {
        quote : "Let It Go",
        author : "Elsa"
    },
    {
        quote : "Life's too short",
        author : "Elsa"
    },
    {
        quote : "Buy when everyone else is selling and hold when everyone else is buying",
        author : "J. Paul Getty"
    },
    {
        quote : "Rish comes from not knowing what you're doing",
        author : "Warren Buffett"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

