import {Percent, StarRounded} from "@mui/icons-material";
import "@egjs/react-flicking/dist/flicking.css";
import Image from "next/image";

export default function Banner3(){
  return(
    <div className="flex items-center justify-between w-full mx-auto rounded-md max-w-md sm:max-w-xl md:max-w-6xl min-h-96 text-zinc-700 bg-zinc-100 relative overflow-hidden bg-pink-200">
      <div className="flex-1 z-10">
        <div className="max-w-md flex flex-col items-start justify-center p-4 sm:p-8 gap-2 sm:gap-6 ml-auto">
          <div className="flex items-center gap-x-2">
            <div className="text-white w-4 h-4 sm:w-6 sm:h-6 flex justify-center items-center rounded-full bg-rose-500/75">
              <Percent className="text-sm" />
            </div>
            <p className="text-rose-500/75 font-bold text-xs sm:text-sm">Weekend Discount</p>
          </div>
          <div>
            <h1 className="text-xl sm:text-4xl font-bold sm:max-w-sm text-black">Up to 50% OFF on USB Gadgets and Accesories</h1>
          </div>
          <div>
            <h1 className="text-xs sm:text-md max-w-sm">Check out the new discount that we offer, start shopping now to find the best prices.</h1>
          </div>
          <div>
            <button className="bg-blue-600 text-white rounded-md px-2 py-1 sm:px-6 sm:py-1.5 hover:bg-blue-500">Buy now →</button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-start z-10">
        <Image className='max-h-72 w-auto' width={485} height={578} alt={'product image'} src={'/ps5.png'}></Image>
      </div>
    </div>
  )
}