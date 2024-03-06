import Link from "next/link"
import Image from "next/image";

interface ShortcutCardProps{
  workgroupName: string;
  workgroupImage: string;
}

export default function ShortcutCard({workgroupImage, workgroupName} : ShortcutCardProps){
  return(
    <Link href={`/dashboard/${workgroupName}`} className="flex justify-center items-center bg-gradient-to-br from-zinc-200/50 to-white/25 hover:from-white/50 hover:to-zinc-200/50 hover:text-shadow rounded-lg w-full h-52 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 opacity-50">
        <Image width={1280} height={800} alt={'project-image'} src={workgroupImage}/>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-20 flex items-center justify-center w-full h-full backdrop-blur-sm bg-black/50 text-xl hover:text-3xl hover:backdrop-blur-none transition-all">
        <p className="drop-shadow-lg">
          {workgroupName}
        </p>
      </div>
    </Link>
  )
}