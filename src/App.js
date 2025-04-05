// react-frontend/src/App.js

import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [ingredients, setIngredients] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/recommend', {
        ingredients,
      });
      setResults(res.data);
    } catch (err) {
      alert('Failed to get recipes');
    }
  };

  return (
    <div className="App">
      <h1>🍳 Recipe Recommender</h1>
      <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} rows={4} />
      <br />
      <button onClick={handleSubmit}>Recommend</button>
      <div className="results">
        {results.map((r, idx) => (
          <div key={idx} className="card">
            <strong>ID:</strong> {r.id}
            <p>{r.joined_ingredients}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
