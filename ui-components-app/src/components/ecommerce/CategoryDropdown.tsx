import Link from "next/link";

interface CategoryDropdownProps{
  isOpen: boolean;
}

export default function CategoryDropdown({ isOpen } : CategoryDropdownProps) {
  return(
  <div className={`${isOpen ? 'block' : 'hidden'} absolute top-full left-1 font-normal w-52 border border-white`}>
    <ul className="bg-orange-300 p-2 text-white">
      <li className="p-1 border-b border-b-white mb-3"><Link href={'/ecommerce/?category=computer'}>PCs and Laptops</Link></li>
      <li className="p-1 border-b border-b-white mb-3"><Link href={'/ecommerce/?category=phone'}>Phones</Link></li>
      <li className="p-1 border-b border-b-white mb-3"><Link href={'/ecommerce/?category=watch'}>Watches</Link></li>
      <li className="p-1 border-b border-b-white mb-3"><Link href={'/ecommerce/?category=camera'}>Cameras</Link></li>
      <li className="p-1 border-b border-b-white mb-3"><Link href={'/ecommerce/?category=headphone'}>Headphones</Link></li>
      <li className="p-1 border-b border-b-white mb-3"><Link href={'/ecommerce/?category=gaming'}>Gaming</Link></li>
      <li className="p-1 border-b border-b-white"><Link href={'/ecommerce/?category=tv'}>TVs</Link></li>
    </ul>
  </div>
  )
}