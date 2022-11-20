import React, { Fragment } from "react";
import Badge from "../../components/badge/Badge";
import Button from "../../components/Button/Button";
import image from "../../assets/banner-1.png";
const Home = () => {
  return (
    <Fragment>
      <div className='px-4 max-h-fit'>
        <div className='hero w-full max-h-fit flex flex-col gap-5'>
          <h1 className='text-3xl w-11/12 font-semibold'>
            We <b className='text-primary'>designed a library</b> to provide
            companies <br /> a complete UI solution.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            fugit ullam, veniam soluta at odit accusantium excepturi dolores.
            Amet a molestias reiciendis, est nihil laboriosam libero atque
            aliquid quis voluptatem.
          </p>
          <div className='flex gap-4 w-full justify-start'>
            <img src={image} className='rounded' alt='' />
          </div>
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
