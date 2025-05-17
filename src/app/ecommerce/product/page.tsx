import Banner3 from "@/components/ecommerce/Banner3";
import { ButtonBlue } from "@/components/home/Button";
import { ProductDescription } from "@/components/ecommerce/Product";
import Gallery from "@/components/ecommerce/Gallery";

export default function Home() {
  return (
      <main>
        <div className="p-4 max-w-6xl mx-auto overflow-hidden">
          <div className="flex items-center justify-center gap-x-8 flex-wrap">
            <div>
              <Gallery images={["https://audioimport.com.ar/wp-content/uploads/2020/06/AKG_K72_SideAngle.png","https://viperpc.in/wp-content/uploads/2023/09/NESO_P1_B_Slogan.png","https://istore.gt/wp-content/uploads/2022/08/EC00029ii2.jpg"]}/>
            </div>
            <div className="max-w-sm mt-5 lg:mt-0">

            <ProductDescription               
              productName="AKG K72 Stereo Headphones Black" 
              productId={16} 
              productDiscount={0.10} 
              productImage="https://audioimport.com.ar/wp-content/uploads/2020/06/AKG_K72_SideAngle.png" productPrice={62} 
              productRating={5} 
              productReviews={10}
            />
            <div className="mt-5">
              <ButtonBlue handleClick={undefined} size="full" text="Add to cart"/>
            </div>
            </div>
          </div>
          <div className="p-4 pt-12 pb-12">
            <Banner3 />
          </div>
        </div>
      </main>
    );
}
