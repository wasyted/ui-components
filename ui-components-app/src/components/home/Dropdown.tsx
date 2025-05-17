'use client'
import { ArrowDropDown } from "@mui/icons-material";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

interface DropdownProps{
  text: string,
}

export default function Dropdown({ text }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen); // This will toggle the dropdown's open state
    console.log('hello')
  }

  return (
    <div className='p-1 relative'>
      <button onClick={openMenu} className="flex items-center justify-start gap-x-2 p-1 pl-2 w-40 sm:w-52 font-normal transition-all">
        <ArrowDropDown />{text}
      </button>
      <DropdownMenu isOpen={isOpen} />
    </div>
  )
}