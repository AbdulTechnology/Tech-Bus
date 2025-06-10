import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({ from: '', to: '', date: '' });
  const [results, setResults] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    axios
      .get('http://localhost:5000/api/users/dashboard', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(res => setMessage(res.data.message))
      .catch(err => {
        console.error(err);
        navigate('/login');
      });
  }, [navigate]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSearch = async e => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:5000/api/routes/search`, {
        params: { from: form.from, to: form.to },
      });
      setResults(res.data);
    } catch (err) {
      console.error('Search failed', err);
    }
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Search Bus Routes</h2>
      <form onSubmit={handleSearch} className="search-form">
        <div className="input-group">
          <input
            name="from"
            onChange={handleChange}
            placeholder="From"
            required
            className="search-input"
            value={form.from}
          />
        </div>
        <div className="input-group">
          <input
            name="to"
            onChange={handleChange}
            placeholder="To"
            required
            className="search-input"
            value={form.to}
          />
        </div>
        <div className="input-group">
          <input
            type="date"
            name="date"
            onChange={handleChange}
            required
            className="search-input date-input"
            value={form.date}
          />
        </div>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <h3 className="results-title">Available Buses</h3>
      {results.length === 0 ? (
        <p className="no-buses-message">No buses found for this route.</p>
      ) : (
        <div className="results-list">
          {results.map((route, i) => (
            <div key={i} className="route-card">
              <h4 className="route-details">
                {route.from} <span className="arrow">➜</span> {route.to}{' '}
                <span className="route-type">({route.type})</span>
              </h4>
              <div className="bus-list">
                {route.Buses.map(bus => (
                  <div key={bus.id} className="bus-item">
                    <p className="bus-info">
                      <span className="bus-icon">🚌</span> {bus.name} - Departs at{' '}
                      <span className="departure-time">{bus.departureTime}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;