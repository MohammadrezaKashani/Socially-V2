import menuIcon from "../assets/icons/menu.svg";
import { HiOutlineHome } from "react-icons/hi";
import { FiSun, FiMoon, FiBell, FiUser, FiLogOut, FiX } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSession } from "../hooks/useSession";
import { useLogout } from "../hooks/useLogout";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);


  
  const { data } = useSession();
  const user = data?.data?.user;
  const isLoggedIn = !!user;

  const { mutate:logout, isPending } = useLogout();
  const handleLogout = () => {
    setOpenMenu(false);
    logout();
  };
  return (
    <>
      <header className="bg-background sticky top-0 backdrop-blur-md px-2 py-5 border-b border-border ">
        <div className="flex justify-between">
          <a href="#" className="text-primary text-2xl ml-3.5">
            Socially
          </a>
          <div className="flex gap-6">
            <button className="bg-card  rounded-md flex items-center justify-center w-9 h-9 shadow-xl border border-border  hover:bg-asent">
              <FiMoon className="w-5 h-5 text-primary" />
            </button>
            <button
              className="bg-primary  rounded-md flex items-center justify-center w-9 h-9 md:hidden"
              onClick={() => setOpenMenu(true)}
            >
              <img src={menuIcon} alt="menu" />
            </button>
            <nav className="flex gap-8">
              <Link
                to={isLoggedIn ? "/home" : "#"}
                className=" gap-2 justify-center items-center text-primary text-sm hidden md:flex "
              >
                <HiOutlineHome className="w-5 h-5 text-primary" />
                Home
              </Link>
              {isLoggedIn ? (
                <>
                  <Link
                    to="/notifications"
                    className=" gap-2 justify-center items-center text-primary text-sm hidden md:flex"
                  >
                    <FiBell className="w-5 h-5 text-primary" />
                    Notifications
                  </Link>

                  <Link
                    to="/profile"
                    className=" gap-2 justify-center items-center text-primary text-sm hidden md:flex"
                  >
                    <FiUser className="w-5 h-5 text-primary" />
                    Profile
                  </Link>

                  <button
                    type="button"
                    onClick={handleLogout}
                    disabled={isPending}
                    className=" gap-2 justify-center items-center text-primary text-sm hidden md:flex cursor-pointer"
                  >
                    <FiLogOut className="w-5 h-5 text-primary" />
                  </button>
                </>
              ) : (
                <Link
                  to="/signIn"
                  className="gap-2 justify-center items-center text-card text-sm hidden md:flex bg-primary py-2 px-4 font-bold rounded-md"
                >
                  Sign in
                </Link>
              )}
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

          <nav className="flex flex-col gap-5">
            <Link
              to={isLoggedIn ? "/home" : "#"}
              className="flex gap-2 text-primary items-center justify-center hover:bg-asent hover:rounded-md py-1"
            >
              <HiOutlineHome /> Home
            </Link>
            {isLoggedIn ? (
              <>
                <Link
                  to="/notifications"
                  className="flex gap-2 text-primary items-center justify-center hover:bg-asent hover:rounded-md py-1"
                >
                  <FiBell /> Notifications
                </Link>

                <Link
                  to="/profile"
                  className="flex gap-2 text-primary items-center justify-center hover:bg-asent hover:rounded-md py-1"
                >
                  <FiUser /> Profile
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={isPending}
                  className="flex gap-2 text-primary items-center  cursor-pointer justify-center hover:bg-asent hover:rounded-md py-1"
                >
                  <FiLogOut /> Logout
                </button>
              </>
            ) : (
              <Link
                to="/signIn"
                className="w-full bg-primary text-card text-center rounded-md py-1"
              >
                signIn
              </Link>
            )}
          </nav>
        </aside>
      )}
    </>
  );
}

export default Header;
