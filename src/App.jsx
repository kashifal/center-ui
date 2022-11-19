import React, { Fragment, useState } from "react";
import Code from "./components/Code/code";
import Header from "./components/Header/Header";
import About from "./routes/About";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import Layout from "./components/Sidebar/Layout";
const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
