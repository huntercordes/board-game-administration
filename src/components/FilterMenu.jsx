import React from "react";
import styles from "../styles/FilterMenu.module.css";

const FilterMenu = ({ selectedFilter, setSelectedFilter }) => {
  return (
    <div className={styles.filterMenu}>
      <h3>Filters</h3>
      <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="strategy">Strategy</option>
        <option value="party">Party</option>
      </select>
    </div>
  );
};

export default FilterMenu;
