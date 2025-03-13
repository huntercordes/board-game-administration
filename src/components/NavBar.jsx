import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = ({ setShowAddGame }) => {
  return (
    <nav className={styles.navbar}>
      <button onClick={() => setShowAddGame((prev) => !prev)}>Add Game</button>
    </nav>
  );
};

export default Navbar;
