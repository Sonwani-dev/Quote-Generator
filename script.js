const heading = document.getElementById("quote");
const author = document.getElementById("author");
const generateButton = document.getElementById("generate");

const quotes = [
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Code is like humor.", author: "Cory House" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    text: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde",
  },
  {
    text: "Java is to JavaScript what car is to Carpet.",
    author: "Chris Heilmann",
  },
  { text: "Knowledge is power.", author: "Francis Bacon" },
  { text: "Fix the cause, not the symptom.", author: "Steve Maguire" },
  {
    text: "Before software can be reusable it first has to be usable.",
    author: "Ralph Johnson",
  },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  {
    text: "Programs must be written for people to read.",
    author: "Harold Abelson",
  },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  {
    text: "Simplicity is prerequisite for reliability.",
    author: "Edsger Dijkstra",
  },
  { text: "Code never lies, comments sometimes do.", author: "Ron Jeffries" },
  {
    text: "The only way to learn a new programming language is by writing programs in it.",
    author: "Dennis Ritchie",
  },
  {
    text: "Sometimes it pays to stay in bed on Monday.",
    author: "Christopher Thompson",
  },
  {
    text: "Any fool can write code that a computer can understand.",
    author: "Martin Fowler",
  },
  {
    text: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs",
  },
  {
    text: "Software is a great combination of artistry and engineering.",
    author: "Bill Gates",
  },
  {
    text: "Controlling complexity is the essence of programming.",
    author: "Brian Kernighan",
  },
];

generateButton.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);

  const quote = quotes[random];

  heading.innerText = quote.text;
  author.innerText = quote.author;
});
