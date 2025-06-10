import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  
  const RegisterClick = () => {
    navigate('/'); // Navigate to Register
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', form);
      localStorage.setItem('token', res.data.token);
      alert('Login successful');
      navigate('/dashboard'); 
      // Redirect or show dashboard
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1 className='heading'>CMB TRAVELS - LOGIN PAGE</h1>
      </div>

      <div className="login-body">
        <div className="image-container">
          
          <div className="proverb">
            "Your journey starts here. Login and explore new destinations."
          </div>
        </div>

        <div className="form-container">
          <h2>Login</h2> {/* Sub-heading for the form */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className='registration-input' /* Reusing class for input styling */
                required
                 // Controlled component
                id="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className='registration-input' /* Reusing class for input styling */
                required
                 // Controlled component
                id="password"
              />
            </div>

            
            {error && <p className="error-message">{error}</p>}

            <div className="button-group">
              <button type="submit" className='form-button login-button'>Login</button>
              
              <button type="button" onClick={RegisterClick} className='form-button back-button'>Back</button>
            </div>
          </form>
        </div>
    
    </div>
    </div>
  );
}

export default Login;
