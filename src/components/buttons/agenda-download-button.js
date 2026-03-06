import React from 'react';
import Link from 'next/link';
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';
import { motion } from 'framer-motion';

// Define animation variants for the icon
const iconVariants = {
  hover: {
    y: [0, 5, 0],
    transition: { repeat: Infinity, duration: 1 },
  },
};

const AgendaDownloadButton = () => {
  return (
    <Link href="/WRI-26-Heavy-Haul-Conference-Agenda.pdf" download>
      {/* Apply initial and whileHover to MotionBox */}
      <motion.div
        className="relative inline-flex items-center justify-center whitespace-nowrap p-5 px-6 py-4 overflow-hidden font-bold text-lg text-white transition duration-300 ease-out border-2 border-white shadow-xl rounded-xl bg-wri-blue hover:bg-wri-green hover:text-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial="rest" // Initial state (non-hovered)
        whileHover="hover" // State when hovered
      >
        <span className="z-10">Schedule At A Glance (PDF)</span>
        {/* Apply variants to MotionIcon */}
        <motion.div className="z-10 w-8 pl-2" variants={iconVariants}>
          <ArrowDownTrayIcon />
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default AgendaDownloadButton;
