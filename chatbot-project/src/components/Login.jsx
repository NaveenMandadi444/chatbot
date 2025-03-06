import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaRobot } from "react-icons/fa"; // Chatbot icon
import { LuStethoscope } from "react-icons/lu";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });
      if (response.status === 200) {
        navigate("/chatbot");
      }
    } catch (error) {
      alert("Login failed!");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 p-6">
      {/* Left Side - Chatbot Preview */}
      <div className="hidden md:flex flex-col items-center justify-center w-1/2 text-white text-center p-8 animate__animated animate__fadeInLeft">
        <LuStethoscope
          size={80}
          className="text-white mb-4 animate__animated animate__bounceIn"
        />
        <h2 className="text-6xl font-extrabold ">Vaidhya </h2>
        <p className="text-3xl mt-4 max-w-md">AI-powered healthcare chatbot</p>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 max-w-md p-8 bg-white bg-opacity-90 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 animate__animated animate__fadeInRight">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-6">
          Login
        </h2>
        <p className="text-center text-lg text-gray-700 mb-8">
          Welcome back! Please log in to continue.
        </p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:bg-gradient-to-l hover:from-purple-600 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-indigo-500 hover:text-indigo-700 font-semibold"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
