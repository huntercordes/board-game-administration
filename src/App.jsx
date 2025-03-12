import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import { useState } from "react"; // Import useState

function App() {
  const [showAddGame, setShowAddGame] = useState(false); // Define setShowAddGame state

  return (
    <Router>
      <Navbar setShowAddGame={setShowAddGame} /> {/* Pass setShowAddGame to Navbar */}
      <Routes>
        <Route path="/" element={<Home showAddGame={showAddGame} setShowAddGame={setShowAddGame} />} />
      </Routes>
    </Router>
  );
}

export default App;
