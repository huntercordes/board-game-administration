import React from "react";
import styles from "../styles/FilterMenu.module.css";

const FilterMenu = ({
  selectedFilter,
  setSelectedFilter,
  selectedCategory,
  setSelectedCategory,
  handleApplyFilters,
  handleClearFilters,
}) => {
  return (
    <div className={styles.filterMenu}>
      <h3>Filters</h3>

      {/* Difficulty Filter */}
      <label>
        <input
          type="radio"
          name="filter"
          value="all"
          checked={selectedFilter === "all"}
          onChange={() => setSelectedFilter("all")}
        />
        All Games
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="easy"
          checked={selectedFilter === "easy"}
          onChange={() => setSelectedFilter("easy")}
        />
        Easy Difficulty
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="medium"
          checked={selectedFilter === "medium"}
          onChange={() => setSelectedFilter("medium")}
        />
        Medium Difficulty
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="hard"
          checked={selectedFilter === "hard"}
          onChange={() => setSelectedFilter("hard")}
        />
        Hard Difficulty
      </label>

      {/* Category Filter */}
      <label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="strategy">Strategy</option>
          <option value="party">Party</option>
          <option value="family">Family</option>
          <option value="abstract">Abstract</option>
        </select>
        Category
      </label>

      {/* Apply & Clear Filters Buttons */}
      <button onClick={handleApplyFilters} className={styles.applyButton}>
        Apply Filters
      </button>
      <button onClick={handleClearFilters} className={styles.clearButton}>
        Clear Filters
      </button>
    </div>
  );
};

export default FilterMenu;
