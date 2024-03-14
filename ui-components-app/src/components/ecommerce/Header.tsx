'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowDropDown, Menu, Person, SearchRounded, ShoppingCart } from "@mui/icons-material"
import CategoryDropdown from "./CategoryDropdown"

export default function Header() {
  const [isScrolled, setScrolled] = useState(true);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  let lastScroll: number = 0;
  const handleScroll = () => {
  };

  const handleScrollDown = () => {
    let currentScrollY = window.scrollY;

    if (currentScrollY >= lastScroll) {
      setIsScrolledDown(true);
    } else {
      setIsScrolledDown(false);
    }
    
    lastScroll = currentScrollY;
    console.log(`last scroll: ${lastScroll} current scroll: ${currentScrollY}`)
  }

  const openMenu = () =>{
    setIsOpen(!isOpen)
  }

  const closeMenu = () =>{
    setTimeout(() => {
      setIsOpen(false)
    },200)
  }

  useEffect(() => {
    // Adding the scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scroll', handleScrollDown, { passive: true });

    return () => {
      // Removing listener
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollDown);
    };
  }, []);

  return(
    <div className="w-full z-50 sticky top-0 left-0 right-0 p-16 sm:p-16">
      <header className={`w-full z-50 fixed top-0 left-0 right-0 bg-white`}>
        <div className={`transition-all flex items-center justify-between text-zinc-700 p-2 ${isScrolled ? 'my-2 pt-2' : 'my-4 sm:my-8'}`}>
          <div className="flex sm:hidden flex-1">
            <Menu />
          </div>
          <Link href={'/ecommerce'} className="flex items-center justify-center sm:justify-start gap-x-2 flex-1">
            <div className="w-6 sm:w-6 hover:animate-bounce transition-all">
              <Image width={311} height={311} alt={'logo image'} src={'/ecommerce-logo.png'}></Image>
            </div>
            <p className="hidden sm:block font-black ">Shoppy</p>
          </Link>
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
        <nav className={`${isScrolledDown ? 'h-0 overflow-hidden' : ''}  items-center justify-between bg-orange-300 text-white py-1 font-bold transition-all ${isScrolledDown ? 'transform translate-y-full duration-200' : 'transform translate-y-0 duration-200'} transition-all`}>
          <div className="flex gap-x-4 pl-2">
            <div className='p-1 relative'>
              <button onBlur={closeMenu} onClick={openMenu} className="flex items-center justify-start gap-x-2 p-1 pl-2 border border-white w-40 sm:w-52 font-normal"><ArrowDropDown />Categories</button>
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
        </nav>

      </header>
    </div>
  )
}