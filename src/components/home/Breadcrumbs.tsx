import { ArrowForward, ArrowForwardIosRounded, Home } from "@mui/icons-material";
import Link from "next/link";

export default function Breadcrumbs(){
  return(
    <div className="font-bold text-zinc-700 flex items-center justify-center gap-x-2">
      <Link className='flex items-center gap-x-1' href={'/'}><Home />Home</Link>
      <p> <ArrowForwardIosRounded /> </p>
      <Link href={'/dashboard'}>Dashboard</Link>
      <p> <ArrowForwardIosRounded /> </p>
      <Link href={'/dashboard/activity'}>Activity</Link>
    </div>
  )
}