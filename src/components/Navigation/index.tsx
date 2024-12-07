"use client";
import React from "react";
import styles from "./styles.module.css";

const Navigation: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftItems}>
        <div className={styles.logo}>
          <img src="/app-logo.svg" alt="ACME Logo" />
        </div>
        <div className={styles.divider}></div>
        <a href="/collect" className={styles.link}>
          Collect
        </a>
        <a href="/analyse" className={styles.link}>
          Analyse
        </a>
        <a href="/reduce" className={styles.link}>
          Reduce
        </a>
        <a href="/report" className={styles.link}>
          Report
        </a>
      </div>
      <div className={styles.user}>ACME</div>
    </nav>
  );
};

export default Navigation;
