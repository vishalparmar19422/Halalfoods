
import React, { useContext } from 'react';
import footerInfo from '../../utils/userContext';


export default function Footer() {
const {user,setUser} = useContext(footerInfo)
{
  setUser({
    name:"Vishal Parmar",
    gmail:"vishalparmar8234@gmail.com",
    copyRight:{
        symbol:"©",
        year:2024,
        appName:"Halal food"
        
    }
  })
}

  
  return (
    <footer className="bg-slate-800 py-4 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex space-x-2 text-gray-300">
          <span>{user.copyRight.symbol}</span>
          <span>{user.copyRight.year}</span>
          <span>{user.copyRight.appName}</span>
        </div>
        <div className="text-gray-300">
          <p>Created by {user.name}</p>
          <p>Email: {user.gmail}</p>
        </div>
      </div>
    </footer>
  );
}