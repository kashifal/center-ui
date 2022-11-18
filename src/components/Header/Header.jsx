import React, { Fragment } from 'react'
import { Icon } from '@iconify/react';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <Fragment>
       
            <div className="w-full h-16 px-2 flex border-b-[1px] border-gray-100 shadow items-center justify-between bg-white text-gra-500">
                <div className="">
                  <a href="#" className='text-xl font-medium text-purple-500'>
                    <img className='w-20' src={logo} alt="" />
                  </a>
                </div>
                <div className="flex items-center justify-center rounded-full ring-1 ring-gray-100 w-96 px-4 py-1 overflow-hidden h-10">
                 <Icon icon="ic:baseline-search" style={{ color: '#64748b' }} />
                {/* <input type="text" placeholder='Search for snippet' className='w-full h-full ml-2 outline-0 text-gray-500 text-sm' name="" id="" />   */}
                  
                
                </div> 
               
            </div>
        
    </Fragment>
  )
}

export default Header