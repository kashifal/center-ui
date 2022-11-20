
import React, { Fragment } from "react";
import Badge from "../../components/badge/Badge";

const Home = () => {
  return (
    <Fragment>
      <div className="flex items-center justify-center flex-col">
      <h1 className='text-6xl font-black'>Welcome to cluster-ui 👋</h1>
      <p className="mt-2 text-xl">Free and Complete Solution for your next <Badge text='UI' /> project.</p>
      </div> 
    </Fragment>
  );
};

export default Home;
