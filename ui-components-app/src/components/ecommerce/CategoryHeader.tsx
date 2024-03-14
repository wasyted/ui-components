'use client'

import { useSearchParams } from "next/navigation"
import { useEffect } from "react";

interface CategoryHeaderProps {
  selectedCategory: string
}

export default function CategoryHeader({selectedCategory} : CategoryHeaderProps){
  const categoryParam = useSearchParams().get("category");
  
  useEffect(() =>{console.log(categoryParam)},[categoryParam])
  return(
    <div>
      {categoryParam === null ? (
          <p className="text-2xl p-8 pl-0 font-bold"><span>Featured products</span></p>
        ) : (
          <p className="text-2xl p-8 pl-0 font-bold"><span className="capitalize">{selectedCategory}</span></p>
        )
      }
    </div>
  )
}