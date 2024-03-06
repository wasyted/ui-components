'use client'
import { ProductCardWide } from "./Product";
import { ProductCardWideSkeleton } from "./ProductSkeleton";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Arrivals(){
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/data/products.json');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return(
    <div>
      <p className="text-2xl p-8 pl-0 font-bold">New Arrivals</p>
      <div className="flex items-center justify-center flex-wrap gap-4 w-full max-w-6xl mx-auto">
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
          {loading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <ProductCardWideSkeleton key={index} />
          ))
        ) : (
          products?.slice(0, 3).map((product: any, index: number) => (
            <ProductCardWide
              key={index}
              productId={product.id}
              productImage={product.image}
              productName={product.name}
              productPrice={product.price}
              productRating={product.rating}
              productReviews={product.reviews}
            />
          ))
        )}
        </div>
      </div>
    </div>
  )
}