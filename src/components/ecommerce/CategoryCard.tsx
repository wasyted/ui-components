export default function CategoryCard({ categoryIcon, categoryName }: any){
  return(
    <div className="flex items-center justify-center flex-col gap-y-2">
      <div className="flex items-center justify-center border w-24 h-16 rounded-md">
        {categoryIcon}
      </div>
      <p>{categoryName}</p>
    </div>
  )
}