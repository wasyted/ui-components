import { Star } from "@mui/icons-material";
import ProductCard, { ProductCardWide } from "./Product";
import Image from "next/image";

export default function Arrivals(){
  return(
    <div>
      <p className="text-2xl p-8 pl-0 font-bold">New Arrivals</p>
      <div className="flex items-center justify-center gap-4 w-full max-w-6xl mx-auto">
        <div className="flex-1 bg-slate-100 min-h-96">
          <h1 className="text-2xl p-6 pb-0 font-bold">Iphone 15 Pro Max</h1>
          <div className="p-6">
            <button className="bg-blue-600 text-white rounded-md px-2 py-1 sm:px-6 sm:py-1.5 hover:bg-blue-500">Buy now →</button>
          </div>
          <div>
            <Image width={1440} height={810} alt={'product image'} src={'/Apple-Iphone-15-Pro-PNG.png'}></Image>
          </div>
        </div>
        <div className="flex-1 flex items-start justify-center flex-col h-full gap-y-2">
          <ProductCardWide />
          <ProductCardWide />
          <ProductCardWide />
        </div>
      </div>
    </div>
  )
}