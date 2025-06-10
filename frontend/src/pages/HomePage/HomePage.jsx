import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  const RegisterClick = () => {
    navigate('/Register'); // Navigate to Register
  };
  const LoginClick = () => {
    navigate('/Login'); // Navigate to Login
  };

  return (
    <div class="container">
        <div class="hero-section">
            <h1 class="main-title">WELCOME TO CMB TRAVELS</h1>
            <p className="proverb">Adventure awaits, and the journey begins with a single click.</p>
            <div class="button-group">
                <a href="#" class="btn btn-register" onClick={RegisterClick}>Customer SignUp</a>
                <a href="#" class="btn btn-login" onClick={LoginClick}>Customer Login</a>
            </div>
        </div>
    </div>
  );
}

export default HomePage;