import React from "react";
import styles from "../styles/Navbar.module.css";
const Navbar = ({ setShowAddGame }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search games..."
          // Other logic for search if needed
        />
        <button>Search</button>
      </div>
      <button onClick={() => setShowAddGame(true)}>Add</button> {/* This should work now */}
    </nav>
  );
};

export default Navbar;
