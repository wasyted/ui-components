'use client'

import { useState, useEffect } from "react";
import ProductCard from "./Product";
import ProductCardSkeleton from "./ProductSkeleton";

export default function Products(){
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
      <p className="text-2xl p-8 pl-0 font-bold">Featured Products</p>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center max-w-6xl mx-auto">
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))
        ) : (
          products?.slice(0, 8).map((product: any, index: number) => (
            <ProductCard
              key={index}
              productId={product.id}
              productImage={product.image}
              productName={product.name}
              productPrice={product.price}
              productRating={product.rating}
              productReviews={product.reviews}
              productDiscount={product.discount}
            />
          ))
        )}
      </div>
    </div>
  )
}