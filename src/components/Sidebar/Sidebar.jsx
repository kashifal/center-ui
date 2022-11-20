import React, { useState } from "react";
import NavLabel from "./NavLabel";
import NavLink from "./NavLink";
import { Links } from "../Links/Links";
import { Link } from "react-router-dom";
import Badge from "../badge/Badge";
import SingleDrop from "../SingleDrop/SingleDrop"; 
function Sidebar() {
  
  return (
    <div className=" top-0 left-0 shadow scroll-smooth col-span-1 h-full fixed w-[20%]  overflow-y-scroll scroll">
      <div className="w-full h-full   flex flex-col gap-3 ">
        <div className="flex items-center px-4 shadow-sm h-16 py-4 w-full  sticky top-0 bg-white   justify-between">
          <Link to="/">
            <h1 className="text-2xl text-secondary px-3">cluster-ui </h1>
          </Link>
          <div className="bg-blue-100 text-primary font-semibold px-3 py-1 text-xs rounded-full">
            v1.0
          </div>
        </div>
        <div className="flex px-4 flex-col py-2 gap-1">
          <NavLabel text="GETTING STARTED" /> 
          {Links?.map((item) => (
            <SingleDrop
              id={item.id}
              path={item.path}
              title={item.title}
              subComp={item.subComp}
              svg={item.svg}
              badge={item.badge}
            />
          ))}
           
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
