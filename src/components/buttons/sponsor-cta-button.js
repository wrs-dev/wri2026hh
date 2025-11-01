import React from 'react';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/16/solid';
import { motion } from 'framer-motion';

const SponsorCTAButton = () => {
  return (
    <Link href="/sponsor-packages" target="_blank" rel="noopener noreferrer">
      {/* Apply initial and whileHover to MotionBox */}
      <motion.div
        className="relative inline-flex items-center justify-center p-5 px-6 py-4 overflow-hidden font-bold text-lg text-white transition duration-300 ease-out border-2 border-white shadow-xl rounded-xl bg-wri-blue hover:bg-wri-green hover:text-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial="rest" // Initial state (non-hovered)
        whileHover="hover" // State when hovered
      >
        <span className="z-10">Become a Sponsor</span>
        <div className="z-10 w-8 pl-2">
          <ArrowTopRightOnSquareIcon />
        </div>
      </motion.div>
    </Link>
  );
};

export default SponsorCTAButton;
