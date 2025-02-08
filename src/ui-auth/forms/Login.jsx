import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log("here")
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:3000/api/v1/login", {
        email: formData.email,
        password: formData.password,
      });

      const { token, user, message } = response.data;

      // Store token in localStorage
      
      localStorage.setItem("token", token);
      localStorage.setItem("User", JSON.stringify(user));
      // localStorage.setItem("Name", user.email);

      // Navigate based on user role
      if (user.role === "Admin") {
        navigate("/admin");
      } else if (user.role === "visitor") {
        navigate("/visitor");
      } else {
        console.log("tushar",user)
        navigate("/"); // Default route for other roles
      }

      console.log(message); // Optional: Log success message
    } catch (err) {
      console.error("Login Error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-800 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-gray-800 mb-1">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
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
          <button
            type="submit"
            disabled={loading}
            className={`w-full text-lg py-2 rounded-2xl transition-colors ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-purple-500 text-white hover:bg-purple-600"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don't have an account yet?{" "}
            <Link to="/signup" className="text-purple-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
