// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
    {
        quote: "The Way Get Started Is To Quit Talking And Begin Doing.",
        source: "Walt Disney",
        tag: "Motivation"
    },
    {
        quote: "Talk is cheap. Show me the code.",
        source: "Linus Torvalds",
        tag: "Developer",
        citation: "Message to linux-kernel mailing list",
        year: "2000-08-25"
    },
    {
        quote: "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
        source: "Jim Rohn",
        tag: "Motivation"
    },
    {
        quote: '<b>DL:</b>"How did you know so much about computers?"<br><b>Grace Hopper</b> - “I didn’t, it was the first one"',
        source: "David Letterman interview with Grace Hopper",
        tag: "Developer",
        citation: "Late Night with David Letterman",
        year: 1986
    },
    {
        quote: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
        source: "Bill Gates",
        tag: "Developer"
    }
];

// Function that gives a random color in RGB value.
function randomBackground() {
    a = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    c = Math.floor(Math.random() * 256);
    rgbColor = 'rgb(' + a + ',' + b + ',' + c + ')';
    return rgbColor;
};

// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote(array) {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return randomQuote;
};

// Create the printQuote funtion and name it printQuote
function printQuote(randomQuote) {
    randomQuote = getRandomQuote();
    message = '<p class="quote">' + randomQuote.quote + '</p>';
    message += '<p class="source">' + randomQuote.source + '\t \t || ' + randomQuote.tag;
    // If quote has citation and year then display them
    if (randomQuote.citation != undefined) {
        message += '<span class="citation">' + randomQuote.citation + '</span>';
        if (randomQuote.year != undefined) {
            message += '<span class="year">' + randomQuote.year + '</span>';
        }
    }
// First part changes the quotes while second changes the background color
    document.getElementById('quote-box').innerHTML = message;
    document.body.style.backgroundColor = randomBackground();
    return message;
};


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Runs the PrintQuote after 25 seconds
setInterval(function() {
    printQuote();
}, 25000);