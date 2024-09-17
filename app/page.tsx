import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 font-sans">
      <h1 className="text-3xl font-bold mb-4 font-mono">building projects and documenting my journey.</h1>
      <div className="flex space-x-4 mt-4">
        <a href="https://mannas.dev" className="text-white hover:text-blue-600 underline text-xl">
          mannas.dev
        </a>
        <a href="https://clueless.lol" className="text-white hover:text-blue-600 underline text-xl">
          clueless.lol
        </a>
      </div>
    </div>
  );
}
