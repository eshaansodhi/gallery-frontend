import React from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import "../styles/wish.css";

const FinalWish = () => {
  return (
    <div className="wish-container">
      <Confetti numberOfPieces={150} gravity={0.2} />
      
      {/* Main Wish */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="wish-text"
      >
        🎉Happy 2 Months💖
      </motion.h1>

      {/* Floating Balloons */}
      <motion.div
        className="balloons"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: -30, opacity: 1 }}
        transition={{ duration: 2, type: "spring", stiffness: 100 }}
      >
        🎈🎈🎈🎈🎈
      </motion.div>

      {/* Love Message */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="love-message"
      >
        <span className="name">Love you ❤️</span>
      </motion.p>
    </div>
  );
};

export default FinalWish;
