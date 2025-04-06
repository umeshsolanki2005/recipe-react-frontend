import { useNavigate } from 'react-router-dom';
import './Home.css';
import background from '../assets/background.jpg';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home" style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '90vh',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1>Welcome to the Smart Recipe Recommender</h1>
      <button onClick={() => navigate('/recommend')} style={{ padding: '1rem 2rem', fontSize: '1.2rem', backgroundColor: '#ff914d', border: 'none', borderRadius: '8px', color: 'white' }}>
        🍳 Suggest Recipe
      </button>
    </div>
  );
}
