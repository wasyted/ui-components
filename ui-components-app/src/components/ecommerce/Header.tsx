'use client'

import { ArrowCircleDown, ArrowDownwardOutlined, ArrowDropDown, Menu, Person, SearchRounded, ShoppingCart } from "@mui/icons-material"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import CategoryDropdown from "./CategoryDropdown"


export default function Header(){
  const [ isScrolled, setScrolled ] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.pageYOffset;

    if (currentScrollY >= 250 && currentScrollY >= lastScrollY) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    setLastScrollY(currentScrollY);
  };

  const openMenu = () =>{
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    // Adding the scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        // Removing listener
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
  return(
    <header className={`w-full z-50 sticky top-0 left-0 right-0 bg-white `} >
      <div className={`transition-all flex items-center justify-between text-zinc-700 p-2 ${isScrolled ? 'p-2' : 'sm:p-8'}`}>
        <div className="flex sm:hidden flex-1">
          <Menu />
        </div>
        <div className="flex items-center justify-center sm:justify-start gap-x-2 flex-1">
          <div className="w-6 sm:w-6 hover:animate-bounce transition-all">
            <Image width={311} height={311} alt={'logo image'} src={'/ecommerce-logo.png'}></Image>
          </div>
          <p className="hidden sm:block font-black ">Shoppy</p>
        </div>
        <div className="items-center justify-center gap-x-2 w-full max-w-lg hidden sm:flex">
          <SearchRounded />
          <input placeholder="Search products..." className='w-full border px-2 py-1 rounded-md' type="text" name="" id="" />
        </div>
        <div className="flex items-center justify-end gap-x-2 flex-1">
          <div className="relative">
            <Link href={'/cart'}>
              <ShoppingCart className="text-3xl"/>
              <div className="absolute bottom-4 left-4 bg-orange-300 w-4 h-4 p-0.5 flex items-center text-center justify-center text-xs font-bold rounded-full text-white">0</div>
            </Link>
          </div>
          <div>
            <Link href={'/profile'}>
              <Person className="text-3xl"/>
            </Link>
          </div>
        </div>
      </div>
      <nav className="flex items-center justify-between bg-orange-300 text-white py-1 font-bold">
        <div className="flex gap-x-4 pl-2">
          <div className='p-1 relative'>
            <button onClick={openMenu} className="flex items-center justify-start gap-x-2 p-1 pl-2 border border-white w-40 sm:w-52 font-normal"><ArrowDropDown />Categories</button>
            <CategoryDropdown isOpen={isOpen} />
          </div>
          <div className='flex items-center justify-start'>
            <ul className="sm:flex items-center justify-start gap-x-6 hidden">
              <li><Link href={'/ecommerce'}>Home</Link></li>
              <li><Link href={'/ecommerce/arrivals'}>Arrivals</Link></li>
              <li><Link href={'/ecommerce/offers'}>Offers</Link></li>
              <li><Link href={'/ecommerce/faq'}>FAQ</Link></li>
              <li><Link href={'/ecommerce/contact'}>Contact</Link></li>
            </ul>
          </div>
        </div>
        <p className="font-bold text-xs flex-2 text-end pr-2">
          Free shiping on $50+ orders
        </p>
      </nav>

    </header>
  )
}