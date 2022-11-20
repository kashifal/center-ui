import React from "react";
import { Link } from "react-router-dom";
function SearchListItem({ link, text }) {
  return (
    <Link to={link}>
      <div className='h-12 w-full group hover:bg-primary hover:text-white rounded my-1 flex items-center px-4 gap-3'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-5 h-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3'
          />
        </svg>
        <span className='group-hover:text-white'>{text}</span>
      </div>
    </Link>
  );
}

export default SearchListItem;
