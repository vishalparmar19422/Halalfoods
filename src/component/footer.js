
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 py-4 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex space-x-2 text-gray-300">
          <span>&copy;</span>
          <span>2024</span>
          <span>Halal Food</span>
        </div>
        <div className="text-gray-300">
          <p>Created by Vishal Parmar</p>
          <p>Email: vishalparmar8234@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}