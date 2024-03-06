import Header from "@/components/ecommerce/Header";
import Categories from "@/components/ecommerce/Categories";
import BannerCarrousel from "@/components/ecommerce/BannerCarrousel";
import Products from "@/components/ecommerce/Products";
import Arrivals from "@/components/ecommerce/Arrivals";
import Banner3 from "@/components/ecommerce/Banner3";

export default function Home() {
  return (
      <main>
        <Header />
        <div className="bg-slate-100 p-2">
          <BannerCarrousel />
        </div>
        <div className="p-4 max-w-6xl mx-auto overflow-hidden">
          <Categories />
          <Products />
          <Arrivals />
          <div className="p-4 pt-12 pb-12">
            <Banner3 />
          </div>
        </div>
      </main>
    );
}
