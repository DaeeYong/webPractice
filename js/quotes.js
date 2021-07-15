const quotes = [
    {
        quotes:"When you go through hardships and decide not to surrender, that is strength.",
        author:"Arnold Schwarzenegger"
    },
    {
        quotes:"It is kind of fun to do the impossible.",
        author:"Walt Disney"
    },
    {
        quotes:"There are better starters than me but I’m a strong finisher.",
        author:"Usain Bolt"
    },
    {
        quotes:"I’ve failed over and over and over again in my life and that is why I succeed.",
        author:"Michael Jordan"
    },
    {
        quotes:"But I know, somehow, that only when it is dark enough can you see the stars.",
        author:"Martin Luther King, Jr"
    },
    {
        quotes:"The way to get started is to quit talking and begin doing.",
        author:"Walt Disney"
    },
    {
        quotes:"Just Do the Next Right Things.",
        author:"Queen Anna Of Arendelle"
    },
    {
        quotes:"Venture outside your comfort zone. The rewards are worth it.",
        author:"Tangled"
    },
    {
        quotes:" The only thing predictable about life is it's unpredictability",
        author:"Ratatouille"
    },
    {
        quotes:"Life's too Short",
        author:"Queen Elsa Of Arendelle"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function PaintQuotes()
{
    const RANDOM_INDEX = Math.floor(Math.random()*quotes.length);
    const todaysQuote = quotes[RANDOM_INDEX];

    quote.innerText = todaysQuote.quotes;
    author.innerText = todaysQuote.author;
}
PaintQuotes();
setInterval(PaintQuotes,5000);