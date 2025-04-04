let quotesArray = [];
let currentQuote = {};
let currentIndex = 0;

document.getElementById('quoteForm').addEventListener('submit',function (event) {
    event.preventDefault()
    const name=document.getElementById('name').value
    const quoteText=document.getElementById('quote').value;
    // document.getElementById('quoteOutput').textContent = `"**${quoteText}**"`;
    // document.getElementById('authorOutput').textContent = `_${name}_`;
    // document.getElementById('output').style.display = 'block';
    const newQuote = {
        id: quotesArray.length,
        author: name,
        quote: quoteText,
        likes: 0
    };
    quotesArray.push(newQuote)
    displayQuote(newQuote)
    document.getElementById('quoteForm').reset()


})
document.getElementById('filterForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const filterAuthor = document.getElementById('filterAuthor').value.toLowerCase();
    const filteredQuotes = quotesArray.filter(quote => quote.author.toLowerCase() === filterAuthor);

    if (filteredQuotes.length > 0) {
        currentIndex = 0;
        displayQuote(filteredQuotes[currentIndex]);
        document.getElementById('prevButton').disabled = false;
        document.getElementById('nextButton').disabled = false;

        
        document.getElementById('prevButton').onclick = () => {
            currentIndex = currentIndex === 0 ? filteredQuotes.length - 1 : currentIndex - 1;
            displayQuote(filteredQuotes[currentIndex]);
        };

        document.getElementById('nextButton').onclick = () => {
            currentIndex = currentIndex === filteredQuotes.length - 1 ? 0 : currentIndex + 1;
            displayQuote(filteredQuotes[currentIndex]);
        };
    } else {
        alert('No quotes found*.');
    }
});
function displayQuote(quote) {
    document.getElementById('quoteOutput').innerHTML = `"**${quote.quote}**"`;
    document.getElementById('authorOutput').innerHTML = `_${quote.author}_`;
      document.getElementById('output').style.display = 'block';
      document.getElementById('likeCount').textContent=`likes=>${quote.likes}`
      currentQuote=quote
    }
    document.getElementById('charCountWithSpaces').addEventListener('click', function() {
        const charCount = currentQuote.quote.length;
        alert(`num of char(with spaces): ${charCount}`);

    });
    document.getElementById('charCountWithoutSpaces').addEventListener('click', function() {
        const charCountWithoutSpaces = currentQuote.quote.replace(/\s+/g, '').length;
        alert(`num of char (without spaces): ${charCountWithoutSpaces}`);
    });
    document.getElementById('wordCount').addEventListener('click', function() {
        const wordCount = currentQuote.quote.split(' ').length;
        alert(`Number of word: ${wordCount}`);
    });
    
    document.getElementById('likeButton').addEventListener('click', function() {
       if (currentQuote) {
        currentQuote.likes++;
        document.getElementById('likeCount').textContent = `Likes: ${currentQuote.likes}`;

        
       }else{
        alert`enter quote fisrt`

       }
    });