import { Star } from "@mui/icons-material";

export default function ProductCard(){
  return(
    <div className="flex flex-col items-center justify-center w-72 p-4 gap-1">
      <div className="flex items-center justify-start w-full mb-1 h-64 rounded-sm bg-slate-100">

      </div>
      <div className="flex items-center justify-start w-full">
        <p className="text-zinc-500">Product name</p>
      </div>
      <div className="flex items-center justify-start w-full">
        <Star /><Star /><Star /><Star /><Star />
      </div>
      <div className="flex items-center justify-start w-full ">
        <p className="font-bold">$399.00</p>
      </div>
    </div>
  )
}

export function ProductCardWide(){
  return(
    <div className="flex items-center justify-start w-full gap-x-4 border p-2">
      <div className="h-32 w-32 rounded-sm bg-slate-100">

      </div>
      <div className="flex flex-col items-center justify-start gap-1">
        <div className="flex items-center justify-start w-full">
          <p className="text-zinc-500">Product name</p>
        </div>
        <div className="flex items-center justify-start w-full">
          <Star /><Star /><Star /><Star /><Star />
        </div>
        <div className="flex items-center justify-start w-full ">
          <p className="font-bold">$399.00</p>
        </div>
      </div>
    </div>
  )
}