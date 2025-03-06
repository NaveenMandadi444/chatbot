import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Correct import
import Signup from "./components/Signup";
import Login from "./components/Login"; // Assuming you have a Login component
import Chatbot from "./components/Chatbot.jsx";

function App() {
  return (
    <Router>
      {" "}
      {/* This should be BrowserRouter or Router */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
