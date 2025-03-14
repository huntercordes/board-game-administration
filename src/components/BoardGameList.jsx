import React, { useState } from "react";
import styles from "../styles/BoardGameList.module.css"; // Your styling

const BoardGameList = ({ games, handleDeleteGame, handleEditGame }) => {
  const [editGameId, setEditGameId] = useState(null); // Track which game is being edited
  const [editedGame, setEditedGame] = useState({
    name: "",
    timeDuration: "",
    shelfNumber: "",
    playerCount: "",
    category: "",
    description: "",
    rules: "",
    difficultyLevel: "",
    gameVideo: "",
  });

  const handleEdit = (game) => {
    // Set the game being edited and pre-fill the form with current values
    setEditGameId(game.id);
    setEditedGame({
      name: game.name,
      timeDuration: game.timeDuration,
      shelfNumber: game.shelfNumber,
      playerCount: game.playerCount, // Set the player count to the existing value
      category: game.category,
      description: game.description,
      rules: game.rules,
      difficultyLevel: game.difficultyLevel,
      gameVideo: game.gameVideo || "",
    });
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    // Call the handleEditGame function with the updated details
    handleEditGame(editGameId, editedGame);
    setEditGameId(null); // Reset the edit state
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedGame((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.boardGameList}>
      {games.map((game) => (
        <div key={game.id} className={styles.gameCard}>
          {editGameId === game.id ? (
            // If this game is being edited, show the edit form
            <form onSubmit={handleSaveEdit}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={editedGame.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Time Duration:</label>
                <input
                  type="number"
                  name="timeDuration"
                  value={editedGame.timeDuration}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Shelf Number:</label>
                <input
                  type="text"
                  name="shelfNumber"
                  value={editedGame.shelfNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Player Count:</label>
                <input
                  type="text" // Changed to text to accept ranges like "3-4"
                  name="playerCount"
                  value={editedGame.playerCount}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Category:</label>
                <input
                  type="text"
                  name="category"
                  value={editedGame.category}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Description:</label>
                <textarea
                  name="description"
                  value={editedGame.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Rules:</label>
                <textarea
                  name="rules"
                  value={editedGame.rules}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Difficulty Level:</label>
                <input
                  type="text"
                  name="difficultyLevel"
                  value={editedGame.difficultyLevel}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Game Video URL:</label>
                <input
                  type="url"
                  name="gameVideo"
                  value={editedGame.gameVideo}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Save</button>
            </form>
          ) : (
            // Display the game details and edit/delete buttons
            <>
              <h3>{game.name}</h3>
              <p><strong>Time Duration:</strong> {game.timeDuration} minutes</p>
              <p><strong>Shelf Number:</strong> {game.shelfNumber}</p>
              <p><strong>Player Count:</strong> {game.playerCount}</p>
              <p><strong>Category:</strong> {game.category}</p>
              <p><strong>Description:</strong> {game.description}</p>
              <p><strong>Rules:</strong> {game.rules}</p>
              <p><strong>Difficulty Level:</strong> {game.difficultyLevel}</p>
              {game.gameVideo && (
                <div>
                  <strong>Game Video:</strong> <a href={game.gameVideo} target="_blank" rel="noopener noreferrer">Watch here</a>
                </div>
              )}
              <button onClick={() => handleEdit(game)}>Edit</button>
              <button onClick={() => handleDeleteGame(game.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default BoardGameList;
