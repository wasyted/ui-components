import Products from "@/components/ecommerce/Products";
import Banner3 from "@/components/ecommerce/Banner3";

export default function Home() {
  return (
      <main>
        <div className="p-4 max-w-6xl mx-auto overflow-hidden">
          <Products category={"computer"}/>
          <div className="p-4 pt-12 pb-12">
            <Banner3 />
          </div>
        </div>
      </main>
    );
}
