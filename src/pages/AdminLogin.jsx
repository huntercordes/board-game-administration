import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"; 
import cafelogo from "../assets/cafelogo.png"; 
import styles from "../styles/AdminLogin.module.css"; 

const AdminLogin = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLoginSuccess(); 
      navigate("/"); // Redirect to home page after login
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
      <img src={cafelogo} alt="Logo" className={styles.logo} />
        <h2 className={styles.title}>Admin Login</h2>
        <form onSubmit={handleLogin} className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.submitButton}>
            Login
          </button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

export default AdminLogin;
