import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-primary  p-6 mb-2 flex justify-between sticky top-0 opacity-90">
      <Link to='/' className="font-semibold text-2xl text-gray-700">Recipe Box</Link>
    </nav>
  );
};

export default Nav;
