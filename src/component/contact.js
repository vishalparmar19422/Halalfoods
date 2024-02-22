
import React from 'react';
import { motion } from 'framer-motion';

export default function ContactUsPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-8 flex justify-center items-center h-screen bg-stone-200"
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-full h-screen flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <form action="#" className="flex flex-col space-y-4 w-[50%]">
        <input type="text" placeholder="Subject" className="border border-gray-300 rounded-md p-2 " />
          <input type="text" placeholder="Your Name" className="border border-gray-300 rounded-md p-2" />
          <input type="email" placeholder="Your Email" className="border border-gray-300 rounded-md p-2" />
          <textarea placeholder="Your Message" rows={4} className="border border-gray-300 rounded-md p-2" />
          <button className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 w-[100px] self-center">Submit</button>
        </form>
      </div>
    </motion.div>
  )
  } 