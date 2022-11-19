import React from "react";
import NavLabel from "./NavLabel";
import NavLink from "./NavLink";
import { Links } from "../Links/Links";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className='w-full top-0 left-0 shadow scroll-smooth col-span-1 h-screen  overflow-y-scroll scroll'>
      <div className='w-full h-full   flex flex-col gap-3 '>
        <div className='flex items-center px-4 shadow-sm h-16 w-full  justify-between'>
          <Link to='/'>
            <h1 className='text-2xl text-secondary px-3'>cluster-ui <span className="text-[8px] font-normal text-primary px-2 py-1  rounded-full bg-purple-100">Complete Solution</span></h1>
          </Link>
          <div className='bg-purple-100 text-primary font-semibold px-3 py-1 text-xs rounded-full'>
            v1.0
          </div>
        </div>
        <div className='flex px-4 flex-col py-5 gap-1'>
          <NavLabel text='GETTING STARTED' />
          <NavLink to='/'>Welcome</NavLink>
          <NavLink to='/'>Installation</NavLink>
          <NavLink to='/'>Contributors</NavLink>
          <NavLink to='/'>Components</NavLink>
        </div>
        <div className='flex px-4 flex-col py-5 gap-1'>
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
