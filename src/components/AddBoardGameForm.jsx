import React, { useState } from "react";
import { ref, push, set } from "firebase/database"; // Firebase functions
import { database } from "../firebaseConfig"; // Import Firebase config
import styles from "../styles/AddBoardGameForm.module.css"; // Your CSS styling

const AddBoardGameForm = ({ handleAddGame, setShowAddGame }) => {
  // State for each input field
  const [gameName, setGameName] = useState("");
  const [timeDuration, setTimeDuration] = useState(""); // Time duration in minutes
  const [shelfNumber, setShelfNumber] = useState(""); // Shelf number
  const [playerCount, setPlayerCount] = useState(""); // Player count (min-max)
  const [category, setCategory] = useState(""); // Category (strategy, family, etc.)
  const [description, setDescription] = useState(""); // Description of the game
  const [rules, setRules] = useState(""); // Rules of the game
  const [difficultyLevel, setDifficultyLevel] = useState(""); // Difficulty level (easy, medium, hard)
  const [gameVideo, setGameVideo] = useState(""); // Video URL of the game (optional)
  const [error, setError] = useState(null); // Error state

  // Function to handle form submission
  const handleSubmit = async () => {
    if (
      gameName.trim() &&
      timeDuration.trim() &&
      shelfNumber.trim() &&
      playerCount.trim() &&
      category.trim() &&
      description.trim() &&
      rules.trim() &&
      difficultyLevel.trim() &&
      gameVideo.trim()
    ) {
      try {
        // Push data to Firebase
        const newGameRef = push(ref(database, "games"));
        await set(newGameRef, {
          name: gameName,
          timeDuration,
          shelfNumber,
          playerCount,
          category,
          description,
          rules,
          difficultyLevel,
          gameVideo,
        });
        
        // Call the existing function to update state after adding
        handleAddGame({ name: gameName, timeDuration, shelfNumber, playerCount, category, description, rules, difficultyLevel, gameVideo });
        setShowAddGame(false); // Close the form after adding game
        setError(null); // Clear any previous error
      } catch (error) {
        setError("Error adding game. Please try again.");
        console.error("Error adding game:", error);
      }
    } else {
      setError("Please fill in all fields.");
    }
  };

  return (
    <div className={styles.modal}>
      <h3>Add a New Board Game</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form>
        <input
          type="text"
          placeholder="Game Name"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Time Duration (min)"
          value={timeDuration}
          onChange={(e) => setTimeDuration(e.target.value)}
        />
        <input
          type="text"
          placeholder="Shelf Number"
          value={shelfNumber}
          onChange={(e) => setShelfNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Player Count (e.g. 2-4)"
          value={playerCount}
          onChange={(e) => setPlayerCount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category (e.g. Strategy, Family)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <textarea
          placeholder="Rules"
          value={rules}
          onChange={(e) => setRules(e.target.value)}
        />
        <input
          type="text"
          placeholder="Difficulty Level (e.g. Easy, Medium, Hard)"
          value={difficultyLevel}
          onChange={(e) => setDifficultyLevel(e.target.value)}
        />
        <input
          type="url"
          placeholder="Game Video URL"
          value={gameVideo}
          onChange={(e) => setGameVideo(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>Add Game</button>
        <button type="button" onClick={() => setShowAddGame(false)}>Cancel</button>
      </form>
    </div>
  );
};

export default AddBoardGameForm;

