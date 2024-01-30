import { FaAlignJustify , FaCartShopping } from "react-icons/fa6"
import { FaSearch } from "react-icons/fa";
import { MdClose } from "react-icons/md";
const Navbar = () => {
  return (
      <div className="flex max-auto max-w-[1640px] justify-between items-center p-4">
          {/*Left Side */}
          <div className="flex items-center">
              <div className="cursor-pointer">
              <FaAlignJustify size={30} />
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
          <div className="bg-black/80 fixed w-full h-screen top-0 left-0 z-10"></div>

          {/* Side drawer menu */}
          <div className="fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300">
              <MdClose className="absolute right-2 top-2 cursor-pointer" size={25} />
              <h2 className="text-2xl p-4">Best <span className="font-bold">Eats</span></h2>
          </div>
    </div>
  )
}

export default Navbar