import React from 'react';
import Link from 'next/link';
import { ChevronDoubleRightIcon } from '@heroicons/react/16/solid';
import { motion } from 'framer-motion';

// Define animation variants for the icon
const iconVariants = {
  hover: {
    x: [0, 5, 0],
    transition: { repeat: Infinity, duration: 1 },
  },
};

const RegisterButton = () => {
  return (
    <Link href="/register" target="_blank" rel="noopener noreferrer">
      {/* Apply initial and whileHover to MotionBox */}
      <motion.div
        className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-bold transition duration-300 ease-out border-2 shadow-xl rounded-xl bg-wri-yellow hover:bg-wri-green border-wri-dark-blue hover:border-white text-wri-dark-blue hover:text-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial="rest" // Initial state (non-hovered)
        whileHover="hover" // State when hovered
      >
        <span className="z-10">REGISTER NOW</span>
        {/* Apply variants to MotionIcon */}
        <motion.div className="z-10 w-8 pl-2" variants={iconVariants}>
          <ChevronDoubleRightIcon />
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default RegisterButton;
