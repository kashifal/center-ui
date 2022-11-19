import React from "react";
import NavLabel from "./NavLabel";
import NavLink from "./NavLink";
import { Links } from "../Links/Links";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className='w-full top-0 left-0 scroll-smooth col-span-1 h-screen px-4 overflow-y-scroll scroll'>
      <div className='w-full h-full py-4 flex flex-col gap-3'>
        <div className='flex items-center justify-between'>
          <Link to='/'>
            <h1 className='text-4xl px-3'>Cluster UI</h1>
          </Link>
          <div className='bg-purple-100 text-purple-900 font-semibold px-2 py-1 text-xs rounded-full'>
            v1.0.0
          </div>
        </div>
        <div className='flex flex-col py-5 gap-1'>
          <NavLabel text='GETTING STARTED' />
          <NavLink to='/'>Welcome</NavLink>
          <NavLink to='/'>Installation</NavLink>
          <NavLink to='/'>Contributors</NavLink>
          <NavLink to='/'>Components</NavLink>
        </div>
        <div className='flex flex-col py-5 gap-1'>
          <NavLabel text='ECOMMERECE' />
          {Links.map((item, index) => {
            return (
              <NavLink key={index} to={item.path}>
                {item.title}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
