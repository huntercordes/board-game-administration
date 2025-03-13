import React from "react";
import styles from "../styles/BoardGameList.module.css"; // Your styling

const BoardGameList = ({ games, handleDeleteGame, handleEditGame }) => {
  const handleEdit = (gameId) => {
    const newName = prompt("Enter new name for the game:");
    if (newName) {
      handleEditGame(gameId, newName); // Call handleEditGame with the new name
    }
  };

  return (
    <div className={styles.boardGameList}>
      {games.map((game) => (
        <div key={game.id} className={styles.gameCard}>
          <h3>{game.name}</h3>
          
          {/* Show additional details */}
          <p><strong>Time Duration:</strong> {game.timeDuration} minutes</p>
          <p><strong>Shelf Number:</strong> {game.shelfNumber}</p>
          <p><strong>Player Count:</strong> {game.playerCount}</p>
          <p><strong>Category:</strong> {game.category}</p>
          <p><strong>Description:</strong> {game.description}</p>
          <p><strong>Rules:</strong> {game.rules}</p>
          <p><strong>Difficulty Level:</strong> {game.difficultyLevel}</p>
          
          {/* Video (if available) */}
          {game.gameVideo && (
            <div>
              <strong>Game Video:</strong> <a href={game.gameVideo} target="_blank" rel="noopener noreferrer">Watch here</a>
            </div>
          )}

          {/* Edit and Delete Buttons */}
          <button onClick={() => handleEdit(game.id)}>Edit</button>
          <button onClick={() => handleDeleteGame(game.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BoardGameList;
