export default function ProductCardSkeleton(){
  return(
    <div className="animate-pulse w-40 sm:w-72 sm:p-4 gap-1 text-sm relative mb-3 sm:mb-0">
      <div className="flex items-center justify-start w-full mb-1 h-40 sm:h-64 rounded-sm bg-slate-100 ">

      </div>
      <div className="flex items-center justify-start w-full">
      </div>
      <div className="flex items-center justify-start w-full">
      </div>
    </div>
  )
}

export function ProductCardWideSkeleton(){
  return(
    <div className="animate-pulse flex items-center justify-start w-full gap-x-4 border p-2">
      <div className="h-32 w-32 rounded-sm bg-slate-100">

      </div>
      <div className="flex flex-col items-center justify-start gap-1">
        <div className="flex items-center justify-start w-full">
        </div>
        <div className="flex items-center justify-start w-full">
        </div>
        <div className="flex items-center justify-start w-full ">
        </div>
      </div>
    </div>
  )
}