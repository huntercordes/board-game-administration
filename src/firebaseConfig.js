// Import the functions you need from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import authentication
import { getDatabase } from "firebase/database"; // Import Realtime Database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO5q1RP7QD7UU3QRv43sEM-hrx-AqVoBQ",
  authDomain: "board-game-database-93f66.firebaseapp.com",
  databaseURL: "https://board-game-database-93f66-default-rtdb.firebaseio.com/", // Ensure this is added
  projectId: "board-game-database-93f66",
  storageBucket: "board-game-database-93f66.appspot.com", // Fixed the typo
  messagingSenderId: "749008783914",
  appId: "1:749008783914:web:20b007016c1930c43ad153",
  measurementId: "G-G86K4ZQLEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication
const database = getDatabase(app); // Initialize Realtime Database

export { app, auth, database }; // Export initialized instances
