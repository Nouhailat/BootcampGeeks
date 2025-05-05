import { useState } from 'react';
import './App.css';

const quotes = [
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "its just life not paradise", author: "Me" }
];

const colors = ["#16a085", "#27ae60", "#2c3e50", "#f39c12", "#e74c3c", "#9b59b6", "#FB6964", "#342224"];

function getRandomIndex(arrLength, currentIndex) {
  let index;
  do {
    index = Math.floor(Math.random() * arrLength);
  } while (index === currentIndex);
  return index;
}

function App() {
  const [quoteIndex, setQuoteIndex] = useState(Math.floor(Math.random() * quotes.length));
  const [color, setColor] = useState(colors[Math.floor(Math.random() * colors.length)]);

  const handleClick = () => {
    const newQuoteIndex = getRandomIndex(quotes.length, quoteIndex);
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setQuoteIndex(newQuoteIndex);
    setColor(newColor);
  };

  const currentQuote = quotes[quoteIndex];

  const appStyle = {
    backgroundColor: color,
    color: color,
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.5s ease-in-out"
  };

  const quoteBoxStyle = {
    backgroundColor: "#fff",
    color: "#333",
    padding: "2rem",
    borderRadius: "10px",
    maxWidth: "600px",
    width: "90%",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
  };

  const buttonStyle = {
    backgroundColor: color,
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    marginTop: "1rem",
    cursor: "pointer"
  };

  return (
    <div style={appStyle}>
      <div style={quoteBoxStyle}>
        <h2>"{currentQuote.text}"</h2>
        <p>— {currentQuote.author}</p>
        <button onClick={handleClick} style={buttonStyle}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
