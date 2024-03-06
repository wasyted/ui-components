import ProductCard from "./Product";

export default function Products(){
  return(
    <div>
      <p className="text-2xl p-8 pl-0 font-bold">Featured Products</p>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center max-w-6xl mx-auto">
      <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}