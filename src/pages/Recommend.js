// react-frontend/src/pages/Recommend.js

import React, { useState } from 'react';
import axios from 'axios';
import './Recommend.css';


function Recommend() {
  const [ingredients, setIngredients] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async () => {
    try {
      const res = await axios.post('https://recipe-flask-api.onrender.com/recommend', {
        ingredients,
      });
  
      console.log('Backend response:', res.data); // Add this line
      setResults(res.data);
    } catch (err) {
      console.error(err);
      alert('Failed to get recipes');
    }
  };
  
  return (
    <div className="recommend-page">
      <h1 className="title">🍽️ Smart Recipe Recommender</h1>
      <p className="subtitle">
        Enter your ingredients below and get personalized recipes!
      </p>

      <textarea
        placeholder="e.g. tomato, onion, garlic..."
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        rows={4}
        className="input-box"
      />
      <br />
      <button onClick={handleSubmit} className="submit-btn">
        Suggest Recipe
      </button>

      <div className="results">
        {results.map((r, idx) => (
          <div key={idx} className="card">
            <img
              src={r.image_url+'.jpg'}
              alt={r.title || 'Recipe'}
              className="recipe-img"
            />
            <h3>{r.title || `Recipe #${idx + 1}`}</h3>
            <p><strong>Ingredients:</strong> {r.joined_ingredients?.slice(0, 120)}...</p>
            <details>
              <summary>View Full Recipe</summary>
              <p><strong>Full Ingredients:</strong> {r.joined_ingredients}</p>
              <p><strong>Instructions:</strong> {r.instructions}</p>

            </details>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommend;
