// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        person: "Martin Luther King Jr."
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        person: "Winston Churchill"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        person: "Confucius"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        person: "John Lennon"
    },
    {
        quote: "The only thing we have to fear is fear itself.",
        person: "Franklin D. Roosevelt"
    },
    {
        quote: "The unexamined life is not worth living.",
        person: "Socrates"
    },
    {
        quote: "I think, therefore I am.",
        person: "René Descartes"
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        person: "Ralph Waldo Emerson"
    },
    {
        quote: "That which does not kill us makes us stronger.",
        person: "Friedrich Nietzsche"
    },
    {
        quote: "Not everything that can be counted counts, and not everything that counts can be counted.",
        person: "Albert Einstein"
    }
];


btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})