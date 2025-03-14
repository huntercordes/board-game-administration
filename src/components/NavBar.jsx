import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { signOut } from "firebase/auth"; // Import signOut from Firebase
import { auth } from "../firebaseConfig"; // Ensure this is correctly imported
import styles from "../styles/Navbar.module.css";
import cafelogo from "../assets/cafelogo.png"; // Adjust path if needed

const Navbar = ({ setShowAddGame, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Initialize navigate for routing

  const handleSearch = () => {
    onSearch(searchQuery.trim().toLowerCase()); // Pass search query to Home component
  };

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out from Firebase
      navigate("/admin-login"); // Redirect to the admin login page
    } catch (error) {
      console.error("Error logging out: ", error); // Handle logout error
    }
  };

  return (
    <nav className={styles.navbar}>
      {/* Left: Logout Button and Search Bar */}
      <div className={styles.left}>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Logout
        </button>
        <input
          type="text"
          placeholder="Search games..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
        <button onClick={handleSearch} className={styles.searchButton}>
          Search
        </button>
      </div>

      {/* Center: Logo/Image */}
      <div className={styles.center}>
        <img src={cafelogo} alt="Logo" className={styles.logo} />
      </div>

      {/* Right: Add Game Button */}
      <div className={styles.right}>
        <button onClick={() => setShowAddGame((prev) => !prev)} className={styles.addButton}>
          Add Game
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

