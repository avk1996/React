import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function HelpLayout() {
  return (
    <div className="flex flex-column gap-3 justify-center">
      <nav>
        <div className="justify-center mb-6 px-2 bg-red-200 rounded-lg hover:scale-110 hover:duration-500 hover:bg-red-400 hover:text-white">
          <NavLink to="contact">Contact</NavLink>
        </div>
        <div className="justify-center mb-6 px-2 bg-green-200 rounded-lg hover:scale-110 hover:duration-500 hover:bg-green-400 hover:text-white">
          <NavLink to="faq">FAQ</NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default HelpLayout;
