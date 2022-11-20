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
      <div className="grid grid-cols-5 h-auto   overflow-hidden w-full">
        <Sidebar />
        <div className=" col-span-4 ml-[25%] w-[100%]">
          <Header />

          <div className="   h-auto w-[75%] relative flex z-50">
            <div className="px-4 py-12">
              <Outlet />
            </div>
            <div className="  w-[20%] right-0 z-10 h-screen fixed mt-0 top-16">
               
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
