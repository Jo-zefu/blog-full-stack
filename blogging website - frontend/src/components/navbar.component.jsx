import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../imgs/logo.png";
import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="flex-none w-10 cursor-pointer">
          <img src={logo} className="w-full" />
        </Link>
        <div
          className={
            "absolute bg-white border-b border-b-grey w-full left-0 top-full py-4 px-[5vw] mt-0.5 md:w-auto md:border-none md:block md:relative md:p-0 md:inset-0 md:show" +
            " " +
            (showSearchBox ? "show" : "hide")
          }
        >
          <input
            type="text"
            placeholder="search"
            className="bg-grey rounded-full w-full text-xl p-4 pl-6 pr-[12%] md:w-auto md:pl-12 md:pr-6 placeholder:text-dark-grey"
          />
          <MagnifyingGlassIcon className="w-6 h-6 absolute right-[10%] top-1/2 -translate-y-1/2 text-dark-grey md:left-5 md:pointer-events-none" />
        </div>
        <div className="flex items-center gap-3 md:gap-6 ml-auto">
          <button
            onClick={() => setShowSearchBox((pre) => !pre)}
            className="bg-grey rounded-full w-12 h-12 flex items-center justify-center md:hidden"
          >
            <MagnifyingGlassIcon className=" w-6 h-6 text-dark-grey md:pointer-events-none" />
          </button>
          <Link to="editor" className="hidden md:flex gap-2 link">
            <PencilSquareIcon className="w-6 h-6" />
            <p>write</p>
          </Link>
          <Link to="/signin" className="btn-dark py-2">
            Sign in
          </Link>
          <Link to="/signup" className="btn-light py-2 hidden md:block">
            Sign up
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
