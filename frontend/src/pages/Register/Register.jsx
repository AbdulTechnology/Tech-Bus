// src/pages/Register.jsx
import { useState,useEffect  } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [storedImage, setStoredImage] = useState(null);
  const navigate = useNavigate();


  const imageLocalStorageKey = 'CMBTRAVELS';

  useEffect(() => {
  const imageData = localStorage.getItem(imageLocalStorageKey);
  if (imageData) {
    setStoredImage(imageData);
  } else {
    console.log(`No image found in local storage with key: ${imageLocalStorageKey}`);
    // Optionally, set a fallback image or handle the absence of an image
  }
}, []);
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users/register', form);
      alert('Registered successfully');
      navigate('/login'); // ✅ Redirect to login
    } catch (err) {
      alert('Error: ' + err.response.data.error);
    }
  }; 

  const HomeBack = () => {
    navigate('/'); 
  };

  return (
    <div className="register-container">
      
      <div className="register-header">
        <h1 className='heading'>CMB TRAVELS - REGISTRATION FORM</h1>
      </div>

      
      <div className="register-body">
        
        <div className="image-container">
          <img
      src={storedImage}
      alt="Travel background"
      className="travel-image"
      style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
    />
          <div className="proverb">
            "The journey of a thousand miles begins with a single step." <br /> - Lao Tzu
          </div>
        </div>

        
        <div className="form-container">
          <h2>Register</h2> 
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                onChange={handleChange}
                placeholder="Your Name"
                className='registration-input'
                required
                
                id="name" // Link label to input
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label> {/* Added for better accessibility */}
              <input
                name="email"
                type="email" // Ensures email format validation
                onChange={handleChange}
                placeholder="Your Email"
                className='registration-input'
                required
                
                id="email" // Link label to input
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label> {/* Added for better accessibility */}
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Your Password"
                className='registration-input'
                required
                
                id="password" // Link label to input
              />
            </div>

            <div className="button-group">
              <button type="submit" className='form-button register-button'>
                Register
              </button>
              
              <button type="button" className='form-button back-button' onClick={HomeBack}>
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
