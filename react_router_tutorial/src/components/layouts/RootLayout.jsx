import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <header>
        <nav>
          <div className="flex justify-between">
            <div className="order-first">
              <h1
                className="px-2 rounded hover:bg-red-400 hover:duration-500"
                title="job portal"
              >
                Job
              </h1>
            </div>
            <div className="flex order-last gap-x-3">
              <div
                className="px-2 rounded hover:bg-violet-700 hover:duration-500 hover:text-white"
                title="click to home"
              >
                <NavLink to="/">Home</NavLink>
              </div>
              <div
                className="px-2 rounded hover:bg-violet-700 hover:duration-500 hover:text-white"
                title="about us"
              >
                <NavLink to="about">About</NavLink>
              </div>
              <div
                className="px-2 rounded hover:bg-violet-700 hover:duration-500 hover:text-white"
                title="about us"
              >
                <NavLink to="help">Help</NavLink>
              </div>
              <div
                className="px-2 rounded hover:bg-violet-700 hover:duration-500 hover:text-white"
                title="about us"
              >
                <NavLink to="careers">Careers</NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
