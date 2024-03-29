'use client'

import { useState, useEffect } from "react";
import ProductCard, { Gallery, ProductDescription } from "./Product";
import ProductCardSkeleton from "./ProductSkeleton";
import { useSearchParams } from "next/navigation";
import { ButtonBlue } from "../home/Button";
import CategoryHeader from "./CategoryHeader";

export default function Products(){
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Featured Products'); 
  const categoryParam = useSearchParams().get("category");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/data/products.json');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        if(categoryParam){
          setSelectedCategory(`${categoryParam}s`);
          setProducts(data.products.filter((p:any) => p.category === categoryParam));
        } else {
          setProducts(data.products);
        };
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchData();
  }, [categoryParam]);
  
  return(
    <div>

      <CategoryHeader selectedCategory={selectedCategory}/>
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