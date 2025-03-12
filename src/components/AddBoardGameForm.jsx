import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Import necessary Firebase functions
import { initializeApp } from "firebase/app"; // Import for Firebase initialization
import firebaseConfig from "../firebaseConfig"; // Import your Firebase config
import styles from "../styles/AddBoardGameForm.module.css";

const AddBoardGameForm = ({ handleAddGame, setShowAddGame }) => {
  const [gameName, setGameName] = useState("");
  const [error, setError] = useState(null); // Add state for error handling

  const app = initializeApp(firebaseConfig); // Initialize Firebase
  const db = getFirestore(app); // Get Firestore instance

  const handleSubmit = async () => {
    if (gameName.trim()) {
      try {
        await addDoc(collection(db, "boardgames"), { name: gameName }); // Add game to Firestore
        handleAddGame({ name: gameName }); // Call your existing function (optional)
        setGameName("");
        setError(null); // Clear any previous errors
      } catch (error) {
        setError("Error adding game. Please try again."); // Set error message
        console.error("Error adding game:", error); // Log error to console
      }
    }
  };

  return (
    <div className={styles.modal}>
      <h3>Add a New Board Game</h3>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}
      <input
        type="text"
        placeholder="Game Name"
        value={gameName}
        onChange={(e) => setGameName(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <button onClick={() => setShowAddGame(false)}>Cancel</button>
    </div>
  );
};

export default AddBoardGameForm;

