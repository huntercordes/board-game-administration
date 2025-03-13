import React, { useState, useEffect } from "react";
import { ref, set, push, onValue, remove, update } from "firebase/database";
import { database } from "../firebaseConfig";
import FilterMenu from "../components/FilterMenu";
import BoardGameList from "../components/BoardGameList";
import AddBoardGameForm from "../components/AddBoardGameForm";
import Navbar from "../components/NavBar";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/Home.module.css";

const Home = ({ showAddGame, setShowAddGame }) => {
  const { user } = useAuth();
  const [selectedFilter, setSelectedFilter] = useState("all"); // For difficulty filter
  const [selectedCategory, setSelectedCategory] = useState("all"); // For category filter
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]); // Stores filtered results

  // Fetch games from Firebase
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
        setFilteredGames(gamesArray); // Initialize with full list
      }
    });
  }, []);

  // Apply filters for both difficulty and category when either selectedFilter or selectedCategory changes
  useEffect(() => {
    let filtered = games;

    // Normalize case for comparison
    const normalizedFilter = selectedFilter.toLowerCase(); // Make the selected filter lowercase
    const normalizedCategory = selectedCategory.toLowerCase(); // Make the selected category lowercase

    // Filter by difficulty
    if (normalizedFilter !== "all") {
      filtered = filtered.filter((game) =>
        game.difficulty && game.difficulty.toLowerCase() === normalizedFilter // Ensure difficulty exists
      );
    }

    // Filter by category
    if (normalizedCategory !== "all") {
      filtered = filtered.filter((game) =>
        game.category && game.category.toLowerCase() === normalizedCategory // Ensure category exists
      );
    }

    setFilteredGames(filtered); // Update filtered games list
  }, [selectedFilter, selectedCategory, games]); // Re-run whenever these states change

  // Function to add a game
  const handleAddGame = (newGame) => {
    const newGameRef = push(ref(database, "games"));
    set(newGameRef, newGame);
    setShowAddGame(false);
  };

  // Function to delete a game
  const handleDeleteGame = (gameId) => {
    remove(ref(database, `games/${gameId}`))
      .then(() => {
        setGames((prevGames) => prevGames.filter((game) => game.id !== gameId));
        setFilteredGames((prevGames) => prevGames.filter((game) => game.id !== gameId));
      })
      .catch((error) => console.error("Error deleting game:", error));
  };

  // Function to edit a game
  const handleEditGame = (gameId, updatedFields) => {
    update(ref(database, `games/${gameId}`), updatedFields)
      .then(() => {
        setGames((prevGames) =>
          prevGames.map((game) => (game.id === gameId ? { ...game, ...updatedFields } : game))
        );
        setFilteredGames((prevGames) =>
          prevGames.map((game) => (game.id === gameId ? { ...game, ...updatedFields } : game))
        );
      })
      .catch((error) => console.error("Error updating game:", error));
  };

  // Function to search games
  const handleSearch = (query) => {
    if (!query) {
      setFilteredGames(games); // Reset to all games if search is empty
      return;
    }
    const filtered = games.filter((game) =>
      game.name.toLowerCase().includes(query.toLowerCase()) // Case-insensitive search
    );
    setFilteredGames(filtered);
  };

  if (!user) {
    return <h2>Please log in to access the admin page.</h2>;
  }

  return (
    <div className={styles.homeContainer}>
      <Navbar setShowAddGame={setShowAddGame} onSearch={handleSearch} />
      <div className={styles.contentContainer}>
        <aside className={styles.filterSection}>
          <FilterMenu 
            selectedFilter={selectedFilter} 
            setSelectedFilter={setSelectedFilter}
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
          />
        </aside>
        <main className={styles.gameSection}>
          <BoardGameList
            games={filteredGames}
            handleDeleteGame={handleDeleteGame}
            handleEditGame={handleEditGame}
          />
          {showAddGame && <AddBoardGameForm handleAddGame={handleAddGame} setShowAddGame={setShowAddGame} />}
        </main>
      </div>
    </div>
  );
};

export default Home;
