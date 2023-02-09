import React from "react";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="bg-green-500 p-6 mb-2 flex justify-between">
      <h3>Recipe Box</h3>
      <FaBars />
    </nav>
  );
};

export default Nav;
