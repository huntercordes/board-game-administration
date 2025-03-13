import "./App.css";
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";

// Protected route logic
function ProtectedRoute({ element }) {
  const { user } = useAuth();
  return user ? element : <Navigate to="/login" />;
}

function App() {
  const [showAddGame, setShowAddGame] = useState(false);
  
  return (
    <AuthProvider>
      <Router>
        <AppContent showAddGame={showAddGame} setShowAddGame={setShowAddGame} />
      </Router>
    </AuthProvider>
  );
}

function AppContent({ showAddGame, setShowAddGame }) {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login";
  const { user } = useAuth();
  const navigate = useNavigate();

  const onLoginSuccess = () => {
    console.log("Login successful!");
    navigate("/"); // Redirect after login
  };

  return (
    <>
      {!hideNavbar && <Navbar setShowAddGame={setShowAddGame} />}
      <Routes>
        <Route path="/login" element={<AdminLogin onLoginSuccess={onLoginSuccess} />} /> {/* Pass it here */}
        <Route
          path="/"
          element={
            <ProtectedRoute element={<Home showAddGame={showAddGame} setShowAddGame={setShowAddGame} />} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
