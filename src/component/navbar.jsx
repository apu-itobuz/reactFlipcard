import { useState } from 'react'
import './navbar.css';
import { CiSearch } from "react-icons/ci"
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { LuStore } from "react-icons/lu";
import { HiOutlineDotsVertical } from "react-icons/hi";






function Navbar() {
 

  return (
    <>
    <div className=' navSectiond d-flex  gap-4 justify-content-center align-items-center py-3'>
        <h2>FLIPKART</h2>
        <div className='position-relative'>
        <input type='text' className='productSearch' placeholder = "search for product"/>
        <CiSearch className='searcIcon position-absolute '/>
        </div>
        
    <ul className='loginSection d-flex  gap-3 my-lg-1 mt-3'>
      <li className='d-flex'> <IoPersonCircleOutline className='loginIcon' />
 <a href="#">Login</a></li>
      <li className='d-flex' > <IoCartOutline  className='cartIcon'/>
 <a href="#">Cart</a></li>
      <li className='d-flex' > <LuStore className='sellerIcon' /> <a href="#">Become a Seller</a></li>
    </ul>
    <HiOutlineDotsVertical />

    </div>
    </>
  )
}

export default Navbar
