import React from "react";

const RegisterButton = () => {
  return (
    <>
      <a
        href="/register"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group border-2 border-wri-dark-blue"
      >
        <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-wri-yellow rounded-full blur-md ease"></span>
        <span className="absolute inset-0 w-full h-full transition duration-50000 group-hover:rotate-180 ease">
          <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-wri-red rounded-full blur-md"></span>
          <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-wri-blue rounded-full blur-md"></span>
        </span>
        <span className="relative text-xl text-wri-dark-blue">Register now!</span>
      </a>
    </>
  );
};

export default RegisterButton;
