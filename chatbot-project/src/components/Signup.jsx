import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/signup", {
        email,
        password,
      });
      if (response.status === 201) {
        navigate("/");
      }
    } catch (error) {
      alert("Signup failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-500 via-blue-500 to-purple-600">
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-96 transform transition-all duration-500 hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-6 animate__animated animate__fadeIn">
          Sign Up
        </h2>
        <p className="text-center text-lg text-gray-700 mb-8 animate__animated animate__fadeIn animate__delay-1s">
          Create your account and start exploring!
        </p>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            />
          </div>

          <div className="mb-6">
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-4 rounded-md hover:bg-gradient-to-l hover:from-purple-600 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <a
            href="/"
            className="text-sm text-indigo-600 hover:text-indigo-700 font-semibold"
          >
            Already have an account? Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
