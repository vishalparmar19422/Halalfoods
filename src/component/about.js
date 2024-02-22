

import  Logo  from "./assets/logo.png";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-700 max-w-md text-center">
        We are a food delivery company using the Swiggy API to bring delicious
        meals to your doorstep.
      </p>
      <div className="mt-8 p-4 bg-stone-200 rounded-lg shadow-xl">
        <img
          src={Logo}
          alt="app Logo"
          className="w-32 h-32 mx-auto"
        />
        <p className="text-gray-600 mt-2 text-center">
          Delivering happiness with every meal order!
        </p>
      </div>
    </div>
  );
}
