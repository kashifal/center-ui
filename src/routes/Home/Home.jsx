import React, { Fragment } from "react";
import Badge from "../../components/badge/Badge";
import Button from "../../components/Button/Button"; 
const Home = () => {
  return (
    <Fragment>
      <div className='px-4 max-h-fit'>
        <div className='hero w-full max-h-fit flex flex-col gap-5'>
          <h1 className='text-3xl w-11/12 font-semibold text-left'>
            We <b className='text-primary'>designed a library</b> to provide
            companies <br /> a complete UI solution.
          </h1>
          <p className="text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            fugit ullam, veniam soluta at odit accusantium excepturi dolores.
            Amet a molestias reiciendis, est nihil laboriosam libero atque
            aliquid quis voluptatem.
          </p>
           
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </Fragment>
  );
};

export default Home;
