import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Image from './Rydeu 2.png';

const MainPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#A5F3FC] to-[#A3E2D2]">
      {/* Background grid lines */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.2) 0px, rgba(255, 255, 255, 0.2) 1px, transparent 1px, transparent 10px),
            repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.2) 0px, rgba(255, 255, 255, 0.2) 1px, transparent 1px, transparent 10px)
          `,
        }}
      />

      {/* Animated image */}
      <motion.img
        src={Image}
        alt="Rydeu Logo"
        className="mb-6 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Button styling */}
      <motion.div
        className="w-48 z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.4 }}
      >
        {/* Animated link to Home Page */}
        <Link to="/home">
          <motion.button
            className="mb-4 w-full px-6 py-2 rounded-lg text-white bg-[#FF8924] hover:bg-[#ef9342] shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            Go to Home Page
          </motion.button>
        </Link>
      </motion.div>

      {/* Animated link to City Page */}
      <motion.div
        className="w-48 z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.4 }}
      >
        <Link to="/city">
          <motion.button
            className="w-full px-6 py-2 rounded-lg text-white bg-[#FF8924] hover:bg-[#ef9342] shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            Go to City Page
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default MainPage;
