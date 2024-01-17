/*
// Get Quotes From API
async function getQuotes() {
  ...
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
  ...
*/ 


//type.fit/api/quotes

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn =  document.getElementById('new-quote');
const loader = document.getElementById('loader');


let apiQuotes = [];

//Show Loading

function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Hide Loading

/*function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;

}*/

function complete(){
    if(!loader.hidden){

        quoteContainer.hidden = false;
       loader.hidden = true;

    }
    
}

//show new Quote
function newQuote(){

    loading();

    //pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //console.log(quote);

    //check if author field is blank and replace it with 'unknown'

    if(!quote.author){
        authorText.textContent = 'Unknown'
    }else{
        authorText.textContent = quote.author
    }
   // authorText.textContent = quote.author;
    //quoteText.textContent = quote.text;

    //check quote length to determine styling

    if(quote.text.length > 30){//characters
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    
    // Set Quote, Hide Loader => complete()
    quoteText.textContent = quote.text;

    complete()
}

//Get Quotes From API

async function getQuotes(){
    
    loading();

    const apiUrl = 'https://type.fit/api/quotes';

    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        //console.log(apiQuotes);

        newQuote()


    }catch(error){
        alert(error)
        //catch error here
    }
}

//Tweet Quote

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank'); //  '_blank' open in new tab
}

//event Listeners

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);


// On Load
getQuotes();
//loading()


/*

// Get quote from api

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn =  document.getElementById('new-quote');
const loader = document.getElementById('loader');


async function getQuote(){
    loading()
    const apiUrl = 'https://forismatic.com/en/api/1.0/?method=getQuote&lang=en&format=json';

    const proxyUrl = 'https://cors-anywhere.herokuapp.com' // when we have error

    try{

        

        const response = await fetch(proxyUrl +  apiUrl );
        cons data = await response.json();
        //console.log(data);
        //authorText.innerText = data.quoteAuthor;

        if(data.innerText === ''){
            author.innerText = 'Unknown';
        }else{
            author.innerText = data.quoteAuthor;
        }

        //reduce font size for long quotes

        if(data.quoteText.length > 50){
            quoteText.classList.add('long-quote');
        }else{
            quoteText.classList.remove('long-quote')
        }

        
        quoteText.innerText = data.quoteText;
        
        //stop loader,show quotes

        complete();

    }catch(error){
        getQuote();
        console.log('whoops, no quote',  error);

    }
}

function tweetQuote(){
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;

    window.open(twitterUrl, '_blank');
}

// Event Listeners

newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

//Show Loading

function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Hide Loading

function complete(){
    if(!loader.hidden){

        quoteContainer.hidden = false;
       loader.hidden = true;

    }
    
}

//On load
getQuote();
*/