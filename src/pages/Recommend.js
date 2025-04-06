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

      // Update with image URLs (assuming images are hosted in GitHub or S3)
      const updatedResults = res.data.map((r, idx) => ({
        ...r,
        image: r.image_url || `https://source.unsplash.com/400x300/?food,recipe&sig=${idx}`,
      }));

      setResults(updatedResults);
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
              src={r.image}
              alt={r.Title || 'Recipe'}
              className="recipe-img"
            />
            <h3>{r.Title || `Recipe #${idx + 1}`}</h3>
            <p><strong>Ingredients:</strong> {r.Cleaned_Ingredients?.slice(0, 120)}...</p>
            <details>
              <summary>View Full Recipe</summary>
              <p><strong>Full Ingredients:</strong> {r.Ingredients}</p>
              <p><strong>Instructions:</strong> {r.Instructions}</p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommend;
