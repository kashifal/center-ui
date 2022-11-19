import React from "react";
import { Link } from "react-router-dom";
function NavLink({ children, to }) {
  return (
    <Link
      to={to}
      className='py-2 px-3 text-md font-light text-secondary rounded-full hover:bg-[#e4defc] transition-all'
    >
      {children}
    </Link>
  );
}
export default NavLink;
