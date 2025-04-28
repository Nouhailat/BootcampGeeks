import React, { useState } from 'react';

function App() {
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ]);

  const increaseVotes = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index].votes += 1;
    setLanguages(updatedLanguages);
  };

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Vote Your Favorite Language</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {languages.map((language, index) => (
          <div key={index} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            width: '300px'
          }}>
            <span>{language.name}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>Votes: {language.votes}</span>
              <button 
                onClick={() => increaseVotes(index)}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer'
                }}
              >
                Vote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;