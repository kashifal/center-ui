import React from "react";
import { Link } from "react-router-dom";
function NavLink({ children, to }) {
  return (
    <Link
      to={to}
      className='py-2 px-3 text-sm font-normal text-secondary rounded-full hover:bg-[#e0f2fe] transition-all'
    >
      {children}
    </Link>
  );
}
export default NavLink;
