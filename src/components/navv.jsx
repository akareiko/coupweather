import React from 'react';

const GlassmorphismNavbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[50vw] bg-white/30 backdrop-blur-md p-4 rounded-full shadow-lg flex justify-between items-center z-50">
      {/* <div className="text-2xl font-bold text-white">coupte</div> */}
      <div className='flex flex-col w-full items-center'>
        <ul className="flex flex-row space-x-6">
            <li>
            <a href="/" className="text-white hover:text-gray-300">home</a>
            </li>
            <li>
            <a href="/run" className="text-white hover:text-gray-300">run</a>
            </li>
            <li>
            <a href="/about" className="text-white hover:text-gray-300">about</a>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default GlassmorphismNavbar;
