'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"


interface DashboardLinkProps {
  linkTo: string;
  linkName: string;
  linkIcon: any;
}

export default function DashboardLink({linkTo, linkIcon, linkName} : DashboardLinkProps){
  const pathname = usePathname()
  return(
    <Link 
      className={`
        ${pathname === linkTo ? 'opacity-100' : 'opacity-50'} 
        flex items-center 
        justify-start gap-2  
        hover:opacity-75`
      } 
      href={linkTo}>
        {linkIcon} 
        <p className="hidden md:block">{linkName}</p>
    </Link>
  )
}