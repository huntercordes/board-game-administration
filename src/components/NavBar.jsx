import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = ({ setShowAddGame, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery.trim().toLowerCase()); // Pass search query to Home component
  };

  return (
    <nav className={styles.navbar}>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search games..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.searchInput}
      />
      <button onClick={handleSearch} className={styles.searchButton}>Search</button>

      {/* Add Game Button */}
      <button onClick={() => setShowAddGame((prev) => !prev)}>Add Game</button>
    </nav>
  );
};

export default Navbar;

