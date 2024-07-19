import React, { useState } from 'react';
import '../../css/login.css'; // Check if this path is correct
import { loginAdmin } from '../../apis/apis';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        try {
            const response = await loginAdmin(formData);
            console.log('Response:', response);
            if (response.success) {
                navigate('/admin')
                setError('')
                setFormData({ firstName: '', password: '' });
              } else {
                alert('Invalid username or password');
                setError(response.message)
              }
        } catch (error) {
            console.error('Error:', error);
   
            setError('Invalid username or password')
            // Handle error
        }
    };

    return (
        <div className="container">
            <div className="header">Login</div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="text" 
                        id="password" 
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
               
                </div>
                {error && <p style={{ fontSize: '14px', color: 'red' }}>{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
