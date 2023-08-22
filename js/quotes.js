const quotes = [
    {
        quote: "Le vent se lève! Il faut tenter de vivre",
        author: "Paul Valery",
    },
    {
        quote: "That you are here—that life exists and identity, That the powerful play goes on, and you may contribute a verse.",
        author: "Walt Whitman",
    },
    {
        quote: "I have a proof of this theorem, but there is not enough space in this margin.",
        author: "Fermat's Last Theorem",
    },
    {
        quote: "Stay hungry, stay foolish",
        author: "Steve Jobs",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
    },
    {
        quote: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
        author: "Marilyn Monroe",
    },
    {
        quote: "We're all mad here.",
        author: "Alice in Wonderland",
    },
    {
        quote: "The moon is beautiful, isn't it?",
        author: "Natsume Sōseki",
    },
    {
        quote: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
        author: "Bill Keane",
    },
    {
        quote: "Life is a beautiful, magnificent thing, even to a jellyfish.",
        author: "Charlie Chaplin",
    }
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

