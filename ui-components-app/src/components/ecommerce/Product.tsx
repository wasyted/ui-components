import { Star } from "@mui/icons-material";
import Image from "next/image";

interface ProductCardProps {
  productName: string;
  productImage: string;
  productRating: number;
  productPrice: number;
  productReviews: number;
  productId: number;
}

interface ProductCardWideProps {
  productName: string;
  productImage: string;
  productRating: number;
  productPrice: number;
  productReviews: number;
  productId: number;
}

export default function ProductCard({ productName, productImage, productRating, productPrice, productReviews, productId }: ProductCardProps) {
  return (
    <div className="w-36 sm:w-72 sm:p-4 gap-1 text-sm relative mb-3 sm:mb-0">
      <div className="flex items-center justify-start w-full max-w-full p-2 mb-1 gap-x-1 h-40 sm:h-64 rounded-sm bg-slate-100 overflow-hidden mb-1">
        <Image className="w-3/4 mx-auto" width={300} height={300} alt={'product image'} src={productImage}></Image>
      </div>
      <p className="text-zinc-500 truncate">{productName}</p>
      <div className="flex items-center justify-start w-full mb-1">
        {[...Array(productRating)].map((_, index) => (
          <Star key={index} className="text-sm" />
        ))}
      </div>
      <div className="flex items-center justify-start w-full">
        <p className="font-bold">${productPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}

export function ProductCardWide({ productName, productImage, productRating, productPrice, productReviews, productId }: ProductCardProps){
  return(
    <div className="flex items-center justify-start w-full gap-x-4 border p-2">
      <div className="h-32 w-32 p-2 flex items-center justify-center rounded-sm bg-slate-100">
        <Image className="h-3/4 w-auto m-auto" width={300} height={300} alt={'product image'} src={productImage}></Image>
      </div>
      <div>
        <p className="text-zinc-500 truncate">{productName}</p>
        <div className="flex items-center justify-start w-full mb-1">
          {[...Array(productRating)].map((_, index) => (
            <Star key={index} className="text-sm" />
          ))}
        </div>
        <div className="flex items-center justify-start w-full">
          <p className="font-bold">${productPrice?.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}