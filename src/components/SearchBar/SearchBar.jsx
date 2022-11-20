import React from "react";

function SearchBar({ onChange, value }) {
  return (
    <div className='w-full border-b hover:border-primary bg-white py-2 flex items-center gap-4'>
      <label htmlFor='search-input'>
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
            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
          />
        </svg>
      </label>
      <input
        id='search-input'
        type='text'
        className='w-full h-full outline-none'
        placeholder='Search components'
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default SearchBar;
