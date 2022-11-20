import React, { Fragment, useState } from "react";
import Badge from "../badge/Badge";

const SingleDrop = ({ id, path, title, subComp, svg, badge }) => {
  const [drop, setDrop] = useState(true);
  console.log(drop);
  function openSection(e) {
    e.preventDefault();

    setDrop(!drop);
  }
  return (
    <Fragment>
      <div className='space-y-1' key={id}>
        <a
          onClick={openSection}
          className={`py-2  px-3 text-sm font-normal text-secondary rounded-full hover:bg-[#e0f2fe] transition-all flex items-center justify-between "bg-[#e0f2fe] font-bold" : ""
          }`}
          id={id}
          href={path}
        >
          <div className='flex items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-4 h-4 text-primary'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d={svg} />
            </svg>
            <span className=' ml-2 '>
              {title} {badge && <Badge text='new' />}
            </span>
          </div>
          <div className={`${subComp.length > 0 ? "block" : "hidden"}`}>
            {drop ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-4 h-4 inline-flex text-blue-700'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-4 h-4 inline-flex'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 4.5l7.5 7.5-7.5 7.5'
                />
              </svg>
            )}{" "}
          </div>
        </a>

        <div
          className={`space-y-1 ${
            drop && subComp.length > 0 ? "block " : "hidden"
          }`}
          id='1'
        >
          {subComp &&
            subComp?.map((i) => (
              <a
                key={i.id}
                href='#'
                className='group divide-x-2 flex w-full items-center rounded-md py-2 pl-10 pr-2 text-sm font-normal text-secondary hover:bg-blue-50'
              >
                {i.title}
              </a>
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default SingleDrop;
