addEventListener("click",function fire(){
        getQuote(url)
})



const url = "https://type.fit/api/quotes";

async function getQuote(uri) {
    try {
        const response = await fetch(uri);
        const data = await response.json();
        
        // Assuming quotes and author are HTML elements
        const quotesElement = document.getElementById('quote');
        const authorElement = document.getElementById('author');
        
        // Get a random quote from the data array
        const randomQuote = data[Math.floor(Math.random() * data.length)];

        quotesElement.innerHTML = randomQuote.text;
        authorElement.innerHTML = randomQuote.author ? randomQuote.author : 'Unknown';
    } catch (error) {
        console.error("Error fetching the quote: ", error);
    }
}
function share() {
    window.open("https://www.instagram.com/")
}

// Call the function
