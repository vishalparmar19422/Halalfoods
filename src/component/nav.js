const Nav = () => (
  <>
    <div className="flex justify-between items-center px-10 bg-orange-500 cursor-pointer">
      <img
        className="w-20 rounded-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdVb-8-He7VPayaMm3wA_j2CMDOZvUxbaYfw&usqp=CAU"></img>

      <ul className="text-white flex gap-10  font-bold  ">
        <li className="p-1 rounded-md h-8 hover:bg-red-600 transition ease-linear duration-200">
          home
        </li>
        <li className="p-1 rounded-md h-8 hover:bg-red-600 transition ease-linear duration-200   ">
          about
        </li>
        <li className="p-1 rounded-md h-8 hover:bg-red-600 transition ease-linear duration-200">
          contact
        </li>
        <li className="p-1 rounded-md h-8 hover:bg-red-600 transition ease-linear duration-200">
          social
        </li>
      </ul>
    </div>
  </>
);

export default Nav;
