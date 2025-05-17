'use client'

import Link from "next/link";

interface DropdownProps{
  isOpen: boolean;
}

export default function DropdownMenu({ isOpen } : DropdownProps) {
  return(
    <div className={`${isOpen ? 'block' : 'hidden'} z-20 absolute w-full top-full left-0 font-normal w-52 border `}>
      <div className={` bg-white/75 backdrop-blur-lg flex flex-col`}>
        <Link className="p-2 hover:bg-zinc-200/75" href={'/'}>Home</Link>
        <Link className="p-2 hover:bg-zinc-200/75" href={'/ecommerce'}>e-commerce</Link>
        <Link className="p-2 hover:bg-zinc-200/75" href={'/dashboard'}>dashboard</Link>
      </div>
    </div>
  )
}