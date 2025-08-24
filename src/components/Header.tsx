import React from "react";
import logo from "../assets/barbie-logo.png"; // Ensure this path is correct
import styles from "../styles/Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Barbie Logo" className={styles.logo} />
      <h1 className={styles.heading}>Barbie Timeline</h1>
    </header>
  );
};

export default Header;
