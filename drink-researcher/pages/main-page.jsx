import React from "react";
import "../styles/main-page.scss";
import { motion } from "framer-motion";
const MainPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 0.7, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="main"
    >
      <div className="bg-image" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="content"
      >
        <div className="card">card</div>
        <div className="card">
          <p>card</p>
        </div>
        <div className="card">
          <p>card</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MainPage;
