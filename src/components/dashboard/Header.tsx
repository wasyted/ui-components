import { Dashboard } from "@mui/icons-material"
import Link from "next/link"

export default function Header(){
  return(
    <header className='w-full p-4 flex items-center justify-start'>
      <Link href={'/dashboard'} className="flex flex-wrap justify-center items-center md:justify-start md:gap-x-1 md:w-full">
        <Dashboard className="text-green-400 text-2xl"/>
        <h1 className="hidden md:block text-sm self-end">-Board</h1>
      </Link>
    </header>
  )
}