"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./styles.module.css";

const Navigation: React.FC = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/collect", label: "Collect" },
    { href: "/analyse", label: "Analyse" },
    { href: "/reduce", label: "Reduce" },
    { href: "/report", label: "Report" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftItems}>
        <div className={styles.logo}>
          <img src="/app-logo.svg" alt="ACME Logo" />
        </div>
        <div className={styles.divider}></div>
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${styles.link} ${
              pathname.startsWith(href) ? styles.active : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
      <div className={styles.user}>ACME</div>
    </nav>
  );
};

export default Navigation;
