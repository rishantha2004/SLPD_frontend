import React, { useState } from 'react';
import '../../css/login.css'
import {loginAdmin} from '../../apis/apis'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [formData, setFormData] = useState({
    adminName: '',
    adminPassword: '',
  });
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
        const response = await loginAdmin(formData);
      if (response.success) {
        navigate('/admin')
      } else {
        console.error("Login failed:", response.message || "Unknown error");
        setError(response.message || "Login failed");
      }
    } catch (error) {
      console.error("Login request failed:", error);
      setError("Invaild Username or Password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Login</div>
        <div className='underline'></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='inputs'>
          <div className='input'>
            <input
              type="text"
              placeholder="Username"
              name="adminName"
              value={formData.adminName}
              onChange={handleChange}
            />
          </div>
          <div className='input'>
            <input
              type="password"
              placeholder="Password"
              name="adminPassword"
              value={formData.adminPassword}
              onChange={handleChange}
            />
          </div>
        </div>
        {error && <div className="error">{error}</div>}
        <div className="submit-container">
          <button type='submit' className="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
