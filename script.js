document.addEventListener("DOMContentLoaded", () => {
    const quoteContainer = document.querySelector(".quote");
    const newQuoteButton = document.getElementById("new-quote-btn");

    function fetchRandomQuote() {
        fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomQuote = data[randomIndex];

            const quoteText = randomQuote.text;
            const quoteAuthor = randomQuote.author || "Unknown";

            const quoteHTML = `
                <blockquote>
                <p>${quoteText}</p>
                <footer>- ${quoteAuthor}</footer>
                </blockquote>
            `;

            quoteContainer.innerHTML = quoteHTML;
        })
        .catch(error => console.error("Error fetching data:", error));
    }

    newQuoteButton.addEventListener("click", fetchRandomQuote);
    fetchRandomQuote();
});