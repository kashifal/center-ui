import React, { Fragment } from 'react'
import { Links } from '../Links/Links';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <Fragment>
        <div className="grid grid-cols-5 h-auto   overflow-hidden w-full">
        <div className="w-full  top-0 left-0  scroll-smooth  col-span-1 border-r-[1px] bg-purple-700 border-purple-700 h-[100vh]">
           {
            Links.map((item,index) => (
              <Link to={item.path}>  <li>{item.title}</li> </Link>
            ))
           }
        </div>
        
            <div className=" col-span-4 ">
              <Header />
                <Outlet />
            </div>
        
        </div>
    </Fragment>
  )
}

export default Layout;