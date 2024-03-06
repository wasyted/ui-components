import { Menu, Person, SearchRounded, ShoppingCart } from "@mui/icons-material"
import Link from "next/link"
import Image from "next/image"

export default function Header(){
  return(
    <header className="w-full z-50 sticky top-0 left-0 right-0 flex items-center justify-between p-2 sm:p-8 text-zinc-700 bg-white">
      <div className="flex sm:hidden flex-1">
        <Menu />
      </div>
      <div className="flex items-center justify-center gap-x-2 flex-1">
        <div className="w-6 sm:w-8">
          <Image width={311} height={311} alt={'logo image'} src={'/ecommerce-logo.png'}></Image>
        </div>
        <p className="hidden sm:block font-black">Shoppy</p>
      </div>
      <div>
        <ul className="sm:flex items-center gap-x-6 hidden">
          <li><Link className='text-zinc-700' href={'/ecommerce'}>Home</Link></li>
          <li><Link className='text-zinc-700' href={'/ecommerce'}>Category</Link></li>
          <li><Link className='text-zinc-700' href={'/ecommerce'}>About Us</Link></li>
          <li><Link className='text-zinc-700' href={'/ecommerce'}>FAQ</Link></li>
          <li><Link className='text-zinc-700' href={'/ecommerce'}>Contact</Link></li>
        </ul>
      </div>
      <div className="flex items-center justify-end gap-x-2 flex-1">
        <div className="flex items-center gap-x-2">
            <input placeholder="Search" className='hidden sm:block border px-2 py-1 rounded-sm w-full' type="text" name="" id="" />
            <SearchRounded />
        </div>
        <div>
          <Link href={'/cart'}>
            <ShoppingCart />
          </Link>
        </div>
        <div>
          <Link href={'/profile'}>
            <Person />
          </Link>
        </div>
      </div>
    </header>
  )
}