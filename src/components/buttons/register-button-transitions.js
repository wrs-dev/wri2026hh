import React from 'react';
import Link from 'next/link';
import { ChevronDoubleRightIcon } from '@heroicons/react/16/solid';
import { motion } from 'framer-motion';

const MotionBox = motion.div;

const RegisterButton = () => {
  return (
    <>
      <Link
        href="/register"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-bold transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-wri-yellow"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-wri-blue via-wri-dark-blue to-wri-red"></span>
        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-wri-red rounded-full opacity-30 group-hover:rotate-90 ease"></span>
        <span className="flex relative text-wri-yellow hover:text-white text-xl">
          Register now{' '}
          <ChevronDoubleRightIcon className="pl-2 w-8 text-wri-yellow" />
        </span>
      </Link>
    </>
  );
};

export default RegisterButton;
