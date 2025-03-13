import React, { useState, useEffect } from "react";
import { ref, set, push, onValue, remove, update } from "firebase/database";
import { database } from "../firebaseConfig";
import FilterMenu from "../components/FilterMenu";
import BoardGameList from "../components/BoardGameList";
import AddBoardGameForm from "../components/AddBoardGameForm";
import { useAuth } from "../context/AuthContext"; // Import AuthContext
import styles from '../styles/Home.module.css';

const Home = ({ showAddGame, setShowAddGame }) => {
  const { user, logout } = useAuth(); // Access current user from AuthContext
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [games, setGames] = useState([]);

  // Fetch games from Firebase when the component mounts
  useEffect(() => {
    const gamesRef = ref(database, "games");

    onValue(gamesRef, (snapshot) => {
      if (snapshot.exists()) {
        const gamesData = snapshot.val();
        const gamesArray = Object.keys(gamesData).map((key) => ({
          id: key,
          ...gamesData[key],
        }));
        setGames(gamesArray);
      }
    });
  }, []);

  // Function to add a game to Firebase
  const handleAddGame = (newGame) => {
    const newGameRef = push(ref(database, "games")); // Generate unique ID
    set(newGameRef, newGame);
    setShowAddGame(false);
  };

  // Function to delete a game from Firebase and update the local state
  const handleDeleteGame = (gameId) => {
    const gameRef = ref(database, "games/" + gameId);
    remove(gameRef)
      .then(() => {
        console.log("Game deleted successfully!");
        // After deleting the game from Firebase, fetch the updated list
        fetchGames();
      })
      .catch((error) => {
        console.error("Error deleting game: ", error);
      });
  };

  // Function to fetch games from Firebase and update the state
  const fetchGames = () => {
    const gamesRef = ref(database, "games");
    onValue(gamesRef, (snapshot) => {
      if (snapshot.exists()) {
        const gamesData = snapshot.val();
        const gamesArray = Object.keys(gamesData).map((key) => ({
          id: key,
          ...gamesData[key],
        }));
        setGames(gamesArray); // Update state with the latest games data from Firebase
      }
    });
  };

  // Function to edit a game (e.g., change name)
  const handleEditGame = (gameId, newName) => {
    const gameRef = ref(database, "games/" + gameId);
    update(gameRef, { name: newName })
      .then(() => {
        console.log("Game updated successfully!");
        // Update local state to reflect the change immediately
        setGames((prevGames) =>
          prevGames.map((game) =>
            game.id === gameId ? { ...game, name: newName } : game
          )
        );
      })
      .catch((error) => {
        console.error("Error updating game: ", error);
      });
  };

  if (!user) {
    return (
      <div>
        <h2>Please log in to access the admin page.</h2>
      </div>
    );
  }

  return (
    <div className={styles.mainContent}>
      <BoardGameList
        games={games}
        handleDeleteGame={handleDeleteGame}
        handleEditGame={handleEditGame}
      />
      <FilterMenu selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      {showAddGame && <AddBoardGameForm handleAddGame={handleAddGame} setShowAddGame={setShowAddGame} />}
    </div>
  );
};

export default Home;
