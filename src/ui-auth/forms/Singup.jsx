import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Student' // Set default role here

  });
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRoleChange = (event) => {
    const value = event.target.value;
    setFormData({ ...formData, role: value }); // Update formData role correctly
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;
    return regex.test(password); // Allow special characters in the password
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const { name, email, password, role } = formData;
    //console.log("name email password and role", {name,email,password,role});
  
    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters long and contain both alphabets and numbers.');
      return;
    }
    setError('');
  
    try {
      await axios.post('http://localhost:3000/api/v1/signup', {
        name,
        email,
        password,
        role,
      });
      alert("user registered successfully");
      navigate('/login');
      console.log('Signup successful');
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      setError(`Signup failed.${error.response.data.message}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md mt-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-800 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-gray-800 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-gray-800 mb-1">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-600"
              >
                {passwordVisible ? (
                  <i className="fas fa-eye-slash text-xl"></i>
                ) : (
                  <i className="fas fa-eye text-xl"></i>
                )}
              </button>
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div>
            <label className="block text-gray-800 mb-1">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleRoleChange}
              className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
            >

              <option value="Alumni">Alumni</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white text-lg py-2 rounded-2xl hover:bg-purple-600 transition-colors"
          >
            Register
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-purple-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
