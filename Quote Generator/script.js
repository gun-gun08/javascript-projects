const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" }
];

function getQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let quote = quotes[randomIndex];

    document.getElementById("quote").textContent = `"${quote.text}"`;
    document.getElementById("author").textContent = `- ${quote.author}`;
}

// Load a random quote on page load
getQuote();
