import React, { useState } from "react";
import FilterMenu from "../components/FilterMenu";
import BoardGameList from "../components/BoardGameList";
import AddBoardGameForm from "../components/AddBoardGameForm";
import Navbar from "../components/NavBar"; // Import Navbar
import styles from '../styles/Home.module.css';

const Home = ({ showAddGame, setShowAddGame }) => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [games, setGames] = useState([]);

  const handleAddGame = (newGame) => {
    setGames([...games, newGame]);
    setShowAddGame(false);
  };

  return (
    <div className={styles.mainContent}>
      <Navbar setShowAddGame={setShowAddGame} /> {/* Pass setShowAddGame to Navbar */}
      <BoardGameList games={games} />
      <FilterMenu selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      {showAddGame && <AddBoardGameForm handleAddGame={handleAddGame} setShowAddGame={setShowAddGame} />}
    </div>
  );
};

export default Home;
