import React from "react";
import { useLocation } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div className={styles.layout}>
      <Header />
      <main className={`${styles.content} ${isHomePage ? styles.homeContent : ""}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
