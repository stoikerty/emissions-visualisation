"use client";
import React, { ReactNode } from "react";
import styles from "./styles.module.css";

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return <div className={styles.container}>{children}</div>;
}
