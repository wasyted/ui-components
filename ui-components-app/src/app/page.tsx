'use client'
import { useState } from "react";
import ProductCard from "@/components/ecommerce/Product";
import { ButtonBlue, ButtonRed, ButtonYellow } from "@/components/home/Button";
import { GitHub } from "@mui/icons-material";
import Link from "next/link";
import Dropdown from "@/components/home/Dropdown";
import Modal from "@/components/home/Modal";
import Tooltip from "@/components/home/Tooltip";
import ProductCardSkeleton from "@/components/ecommerce/ProductSkeleton";
import Breadcrumbs from "@/components/home/Breadcrumbs";

export default function Home() {
  const [skeletonVisible, setSkeletonVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const openModal = () => {
    setModalVisible(!modalVisible);
  }
  const showTooltip = () => {
    setTooltipVisible(!tooltipVisible);
  }
  const showSkeleton = () => {
    setSkeletonVisible(!skeletonVisible);
  }
  return (
    <div className="pt-10 bg-gradient-to-bl from-zinc-100 to-slate-300 min-h-screen">
      <div className="flex items-center justify-center flex-col">
        <h1 className="bg-gradient-to-br from-zinc-950 to-zinc-500 bg-clip-text text-transparent text-6xl font-black max-w-lg h-max text-center">
          Type-safe React components with TailwindCSS
        </h1>
        <p className="text-zinc-600 max-w-sm text-center mt-5">
          An opinionated collection of various components with common props for your Next.js project.
        </p>
        <div className="mt-5 flex items-center gap-x-4">
          <button className="flex items-center gap-x-2 hover:border hover:border-black bg-black text-white px-4 py-1.5 rounded-full hover:bg-white hover:text-zinc-500 shadow-md transition-all"><GitHub /> Code</button>
          <button className="bg-white text-black px-4 py-1.5 rounded-full hover:border-black border shadow-md transition-all">See all live versions</button>
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 p-6 gap-4 max-w-6xl mx-auto mt-5">
        <div className="bg-gradient-to-tr from-zinc-50/75 to-white/75 col-span-2 bg-white rounded-lg min-h-72 shadow-md flex items-center justify-between gap-x-4 p-6 flex-col">
          <p className="font-bold">Interactive Buttons</p>
          <div className="flex-1 flex items-center justify-center gap-x-4 p-2">
            <ButtonBlue handleClick={undefined} text="Click here to sign-up" size="large"/>
            <ButtonRed handleClick={openModal} text="Delete" size="large"/>
            <div className="relative" onMouseEnter={showTooltip} onMouseLeave={showTooltip}>
              <ButtonYellow handleClick={undefined} text="Warning" size="large"/>
              <Tooltip text={'This is a tooltip!'} isVisible={tooltipVisible} />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-tr from-zinc-50/75 to-white/75 col-span-1 row-span-2 bg-white rounded-lg shadow-md flex items-center justify-center flex-col p-4 h-full">
          <p className="font-bold">Product Card</p>
          <div onMouseEnter={showSkeleton} onMouseLeave={showSkeleton}>
            <div className={`${skeletonVisible ? 'block' : 'hidden'}`}>
              <ProductCardSkeleton />
            </div>
            <div className={`${skeletonVisible ? 'hidden' : 'block'}`}>
              <ProductCard productName="AKG K72 Stereo Headphones Black" productId={16} productDiscount={0.10} productImage="https://audioimport.com.ar/wp-content/uploads/2020/06/AKG_K72_SideAngle.png" productPrice={62} productRating={5} productReviews={10}/>
            </div>
          </div>
          <p className="text-zinc-300">Hover to toggle suspense</p>
        </div>
        <div className="bg-gradient-to-tr from-zinc-50/75 to-white/75 col-span-1 bg-white rounded-lg min-h-72 shadow-md flex items-center justify-between p-6 flex-col">
          <div className="flex-1 flex items-start justify-center gap-x-4 p-2">
            <Dropdown text='Navigation Links'/>
          </div>
          <p className="font-bold">Dropdown Menu</p>
        </div>
        <div className="bg-gradient-to-tr from-zinc-50/75 to-white/75 col-span-1 bg-white rounded-lg min-h-72 shadow-md flex items-center justify-between p-6 flex-col">
          <p className="font-bold">Breadcrumbs</p>
          <div className="flex-1 flex items-center">
            <Breadcrumbs />
          </div>
        </div>
        <div className="bg-gradient-to-tr from-zinc-50/75 to-white/75 col-span-1 bg-white rounded-lg min-h-72 shadow-md">
        
        </div>
      </div>
      <div className="flex items-center justify-center p-8 w-full gap-x-2 transition-all">
        <Link className="hover:text-6xl hover:font-extrabold" href='/dashboard'>Dashboard</Link>
        <Link className="hover:text-6xl hover:font-extrabold" href='/ecommerce'>Ecommerce</Link>
      </div>
      <Modal isVisible={modalVisible} handleClick={openModal}/>
    </div>
    );
}
