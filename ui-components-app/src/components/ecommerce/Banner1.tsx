import {StarRounded} from "@mui/icons-material";
import "@egjs/react-flicking/dist/flicking.css";
import Image from "next/image";

export default function Banner1(){
  return(
    <div className="flex items-center justify-between w-full mx-auto rounded-md max-w-md sm:max-w-xl md:max-w-2xl min-h-96 text-zinc-700 bg-zinc-100 relative overflow-hidden">
      <div className="flex-1 z-10">
        <div className="max-w-md flex flex-col items-start justify-center p-4 sm:p-8 gap-2 sm:gap-6 ml-auto">
          <div className="flex items-center gap-x-2">
            <div className="text-white w-4 h-4 sm:w-6 sm:h-6 flex justify-center items-center rounded-full bg-rose-500/75">
              <StarRounded className="text-sm" />
            </div>
            <p className="text-rose-500/75 font-bold text-xs sm:text-sm">Top Product Of The month</p>
          </div>
          <div>
            <h1 className="text-xl sm:text-4xl font-bold sm:max-w-sm text-black">Surface Pro 7+ for companies</h1>
          </div>
          <div>
            <h1 className="text-xs sm:text-md max-w-sm">The classic Pro device, with high speed performance, integrated security and compatibility with any accessories you need.</h1>
          </div>
          <div>
            <button className="bg-blue-600 text-white rounded-md px-2 py-1 sm:px-6 sm:py-1.5 hover:bg-blue-500">Buy now →</button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-start z-10">
        <Image className='max-h-72 w-auto' width={1920} height={1080} alt={'product image'} src={'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-RWGaM8-Surface-Pro-7-in-Laptop-Mode:VP5-1920x1080?fmt=png-alpha'}></Image>
      </div>
      <div className="absolute top-0 left-0 bottom-0 right-0 opacity-25">
        <Image width={3000} height={2000} alt={'background image'} src={'/banner-background.jpg'}></Image>
      </div>
    </div>
  )
}