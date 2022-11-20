import React from "react";
import { useSelector } from "react-redux";

function Modal() {
  const isOpen = useSelector((state) => state.ModalSlice.isOpen);
  return (
    <div
    style={{zIndex:'10000'}}
      className={`absolute ml-auto mr-auto left-0 right-0 top-0 ${
        isOpen ? "flex" : "hidden"
      }  bottom-0 mt-16 mb-auto bg-white h-[400px] w-[750px] rounded-lg p-5  flex-col`}
    >
      <div className='w-full border-b hover:border-primary  py-2 flex items-center gap-4'>
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
        />
      </div>
      <div className='h-full py-4 overflow-y-scroll scroll'>
        <div className='w-full px-4 flex items-center h-10'></div>
      </div>
    </div>
  );
}

export default Modal;
