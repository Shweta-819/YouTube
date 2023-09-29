import React from 'react'
import { useDispatch } from 'react-redux';
import {toggleMenu} from '../utils/appSlice';

const Header = () => {
const dispatch = useDispatch();

    const toggleSideBar = (()=>{
        dispatch(toggleMenu())

    })
  return (
    <div className='grid  grid-flow-col p-5 m-2 shadow-md'>
   <div className='flex col-span-1'>
    <img onClick={() => toggleSideBar()}  className="h-8 cursor-pointer" src= "https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" alt="menu"></img>
    <img  className="h-7" src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png" alt="logo"></img>
   </div>
   <div className='col-span-4'>

    <input type="text" placeholder='Search' className='w-3/4 border border-gray-400 rounded-l-full p-2'></input>
    <button className='border border-gray-400 rounded-r-full px-5 py-2 bg-gray-100'>🔍</button>
   </div>
   <div className='col-span-1'>
    <img  className="h-8" src="https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg" alt="user"></img>
   </div>
    </div>
  )
}

export default Header;
