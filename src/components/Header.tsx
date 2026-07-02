import React from "react";
import menuIcon from "../assets/icons/menu.svg";
import { HiOutlineHome } from "react-icons/hi";
import { FiSun, FiMoon, FiBell, FiUser, FiLogOut, FiX } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <header className="bg-background sticky top-0 backdrop-blur-md px-2 py-5 border-b border-border ">
        <div className="flex justify-between">
          <a href="#" className="text-primary text-2xl">
            Socially
          </a>
          <div className="flex gap-6">
            <button className="bg-card  rounded-md flex items-center justify-center w-9 h-9 shadow-xl border border-border  hover:bg-asent">
              <FiMoon className="w-5 h-5 text-primary" />
            </button>
            <button
              id=""
              className="bg-primary  rounded-md flex items-center justify-center w-9 h-9 md:hidden"
              onClick={() => setOpenMenu(true)}
            >
              <img src={menuIcon} alt="menu" />
            </button>
            <nav className="flex gap-10">
              <Link
                to="/"
                className=" gap-2 justify-center items-center text-primary text-sm hidden md:flex "
              >
                <HiOutlineHome className="w-5 h-5 text-primary" />
                Home
              </Link>
              <Link
                to="notifications"
                className=" gap-2 justify-center items-center text-primary text-sm hidden md:flex"
              >
                <FiBell className="w-5 h-5 text-primary" />
                Notifications
              </Link>

              <Link
                to="profile"
                className=" gap-2 justify-center items-center text-primary text-sm hidden md:flex"
              >
                <FiUser className="w-5 h-5 text-primary" />
                Profile
              </Link>

              <a
                href="#"
                className=" gap-2 justify-center items-center text-primary text-sm hidden md:flex"
              >
                <FiLogOut className="w-5 h-5 text-primary" />
              </a>
            </nav>
          </div>
        </div>
      </header>
      {openMenu && (
        <aside className="fixed top-0 right-0 w-3/4 h-full bg-card p-6 shadow-lg border-l border-border md:hidden ">
          <div className="flex justify-between">
            <span className="text-primary font-bold">Menu</span>
            <button onClick={() => setOpenMenu(false)} className="mb-6">
              <FiX className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            <a href="#" className="flex gap-2 text-primary items-center">
              <HiOutlineHome /> Home
            </a>

            <a href="#" className="flex gap-2 text-primary items-center">
              <FiBell /> Notifications
            </a>

            <a href="#" className="flex gap-2 text-primary items-center">
              <FiUser /> Profile
            </a>

            <a href="#" className="flex gap-2 text-primary items-center">
              <FiLogOut /> Logout
            </a>
          </nav>
        </aside>
      )}
    </>
  );
}

export default Header;
