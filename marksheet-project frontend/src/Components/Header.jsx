import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ sideBar, setSideBar }) => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const userType = localStorage.getItem("userType");
  const handleLogout = () => {
    navigate("/");
    localStorage.clear();
  };
  return (
    <div className="navbar bg-white shadow-md sticky top-0">
      <div className="navbar-start">
        <div className="flex-none">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => setSideBar(!sideBar)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="navbar-center">
        <p className=" text-xl font-semibold">Control Panel</p>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <h1>
                Hello,
                <span className="text-base font-semibold black">{`${username}`}</span>
              </h1>
            </li>
            <li>
              <Link to="/changePassword">Change Password</Link>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
