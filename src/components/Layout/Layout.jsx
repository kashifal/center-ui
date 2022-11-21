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
      <div className="grid grid-cols-5 h-auto   overflow-hidden w-screen">
        <Sidebar />
        <div className=" col-span-4 lg:ml-[25%]  w-screen">
          <Header />

          <div className=" top-16   h-auto w-[100%] md:w-[70%] lg:w-[60%]     relative flex z-50">
            <div className="px-4   py-12">
              <Outlet />
            </div>
            <div className="md:block hidden  lg:w-[20%] md:w-[30%]  right-0 z-10  px-6 py-8 h-screen fixed mt-0 top-16">
              <span>Art of knowing nothing!!!</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
