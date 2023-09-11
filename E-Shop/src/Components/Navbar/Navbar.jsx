import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai';
import {RxCross1} from "react-icons/rx"
import { useSelector } from 'react-redux'

const Navbar = () => {
  
const cartItems = useSelector((state)=>state.cart.items);
const[menu,setMenu] = useState(true);

const handleClick=()=>{
    setMenu(!menu);
}

  return (
    <div>      
<nav className="p-4 bg-gray-800 ">
  <div className="flex items-center justify-between ">
    <div className="flex items-center">
      <div className="text-xl font-semibold text-white">E-Shop</div>
      <div className="ml-2 md:hidden">

      </div>
    </div>
    <div className="hidden space-x-4 uppercase md:flex ">
        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        <Link to="/cart" className="text-white hover:text-gray-300">Cart({cartItems.length})</Link>
        <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
    </div>
    { menu ? <AiOutlineMenu onClick={handleClick} className='block text-3xl text-white md:hidden'/> :
       <RxCross1 onClick={handleClick}  className='block text-3xl text-white md:hidden'/>  }
       
  </div>
</nav>

{/* Responsive */}

 { ! menu && <div className=" w-[60%] h-screen text-white uppercase bg-black md:hidden">
  <div className='flex flex-col items-center gap-5 '>
  <Link to="/"  className="block text-white hover:text-gray-300">Home</Link>
  <Link to="/cart"  className="block text-white hover:text-gray-300">Cart(0)</Link>
  <Link to="/login"  className="block text-white hover:text-gray-300">Login</Link>
  </div>
  </div> } 

    </div>
  )
}

export default Navbar