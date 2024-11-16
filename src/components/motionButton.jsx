'use client';
import { motion } from "motion/react";

export default function MotionButton() {

  return (
      <div className="centered-button-container">
        <motion.button
          className="glass-button" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
            jump to dashboard
        </motion.button>
      </div>
  );
}