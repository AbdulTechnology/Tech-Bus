
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register/Register.jsx';
import Login from './pages/Login/Login.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      
    </Routes>
  );
}

export default App;
