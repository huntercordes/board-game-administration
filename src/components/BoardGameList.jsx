import React from "react";
import styles from "../styles/BoardGameList.module.css";

const BoardGameList = ({ games }) => {
  return (
    <div className={styles.boardGameList}>
      <h2>Available Board Games</h2>
      {games.length === 0 ? (
        <p>No games available</p>
      ) : (
        games.map((game, index) => <p key={index}>{game.name}</p>)
      )}
    </div>
  );
};

export default BoardGameList;
