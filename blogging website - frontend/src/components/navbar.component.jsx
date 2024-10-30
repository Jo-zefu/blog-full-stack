import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="w-10 cursor-pointer">
        <img src={logo} className="w-full" />
      </Link>
    </nav>
  );
};

export default Navbar;
