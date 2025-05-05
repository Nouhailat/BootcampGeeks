import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const categories = ['Mountain', 'Beaches', 'Birds', 'Food'];

export default function Home() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim() !== '') {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="home">
      <h1>📸 Snap Shot</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="categories">
        {categories.map((cat) => (
          <Link key={cat} to={`/category/${cat.toLowerCase()}`}>
            <button>{cat}</button>
          </Link>
        ))}
      </div>
    </div>
  );
}
