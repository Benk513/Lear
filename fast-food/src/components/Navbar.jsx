import {FaCartShopping,FaTruckFast,FaTag,FaStar } from "react-icons/fa6"
import { FaSearch, FaWallet, FaUserFriends } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose ,MdFavorite,MdHelp  } from "react-icons/md";
import { useState } from "react";
const Navbar = () => {
    const [nav,setNav] = useState(false)
  return (
      <div className="flex max-auto max-w-[1640px] justify-between items-center p-4">
          {/*Left Side */}
          <div className="flex items-center">
              <div onClick={()=> setNav(!nav)} className="cursor-pointer">
              <GiHamburgerMenu size={30} />
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">Best <span className="font-bold">Eats</span></h1>
              <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                  <p className="bg-black text-white rounded-full p-2">Delivery</p>
                  <p className="p-2">Pickup</p>
              </div>
          </div>

          {/* Search Input */}
          <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
              <FaSearch size={20} />
              <input className="bg-transparent p-2 w-full focus:outline-none" type="text" placeholder="Search foods" />
          </div>
          {/* cart button */}
          <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
          <FaCartShopping size={25} className="mr-2"/>
              Cart
          </button>

          {/* Mobile Menu */}
          {/* Overlay */}
          {nav && <div onClick={() => setNav(!nav)} className="bg-black/80 fixed w-full h-screen top-0 left-0 z-10"></div>}
          

          {/* Side drawer menu */}
          <div className={nav ?"fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" :"fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
              <MdClose onClick={() => setNav(!nav)} className="absolute right-2 top-2 cursor-pointer" size={25} />
              <h2 className="text-2xl p-4">Best <span className="font-bold">Eats</span></h2>
              
              <nav>
                  <ul className="flex flex-col p-4 text-gray-800">
                      <li className="flex text-xl py-4 items-center "><FaTruckFast className="mr-2" size={25} />Orders</li>
                      <li className="flex text-xl py-4 items-center "><MdFavorite className="mr-2" size={25} />Favorites</li>
                      <li className="flex text-xl py-4 items-center "><FaWallet className="mr-2" size={25} />Wallet</li>
                      <li className="flex text-xl py-4 items-center "><MdHelp className="mr-2" size={25} />Help</li>
                      <li className="flex text-xl py-4 items-center "><FaTag  className="mr-2" size={25} />Promotion</li>
                      <li className="flex text-xl py-4 items-center "><FaStar className="mr-2" size={25} />Best Ones</li>
                      <li className="flex text-xl py-4 items-center "><FaUserFriends  className="mr-2" size={25} />Invite Friends</li>
              </ul>    
              </nav>
          </div>
    </div>
  )
}

export default Navbar