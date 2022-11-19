import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Overlay from "../Modal/Overlay";
import Modal from "../Modal/Modal";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  return (
    <Fragment>
      <Overlay />
      <Modal />
      <div className='grid grid-cols-5 h-auto   overflow-hidden w-full'>
        <Sidebar />
        <div className=' col-span-4 '>
          <Header />
          <br />
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;