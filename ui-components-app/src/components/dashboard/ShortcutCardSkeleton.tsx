import Link from "next/link"

export default function ShortcutCardSkeleton(){
  return(
    <Link href={'/workgroups/1'} className="animate-pulse flex justify-center items-center bg-gradient-to-br from-zinc-200/50 to-white/25 hover:from-white/50 hover:to-zinc-200/50 hover:text-shadow rounded-lg w-full h-52">
    </Link>
  )
}