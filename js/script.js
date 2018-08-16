// FSJS - Random Quote Generator

var message = "";

// Create the array of quote objects and name it quotes
var quotes = [
    {
        quote: "The Way Get Started Is To Quit Talking And Begin Doing.",
        source: "Walt Disney"
    },
    {
        quote: "Talk is cheap. Show me the code.",
        source: "Linus Torvalds",
        citation: "Message to linux-kernel mailing list",
        year: "2000-08-25"
    },
    {
        quote: "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
        source: "Jim Rohn"
    },
    {
        quote: '<b>DL:</b>"How did you know so much about computers?"<br><b>Grace Hopper</b> - “I didn’t, it was the first one"',
        source: "David Letterman interview with Grace Hopper.",
        citation: "Late Night with David Letterman.",
        year: 1986
    },
    {
        quote: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
        source: "Bill Gates"
    }
]


// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote(array) {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    return randomQuote;
};

getRandomQuote();


// Create the printQuote funtion and name it printQuote
function printQuote(randomQuote) {
    randomQuote = getRandomQuote();
    message =  '<p class="quote">' + randomQuote.quote + '</p>';
    message += '<p class="source">' + randomQuote.source;
    document.getElementById('quote-box').innerHTML = message;
    return message;

};


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);