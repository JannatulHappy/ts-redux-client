import React from "react";
import logo from "../../../assets/images/logo.png";
const Header = () => {
  return (
    <div className=" pl-20 mx-auto  pr-20">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex">
          <input type="text" className="p-3 border-solid border-2 rounded-md border-gray-500 w-64" />
          <button>search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
