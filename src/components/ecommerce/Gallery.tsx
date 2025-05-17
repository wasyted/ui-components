'use client'

import { useState } from "react";
import Image from "next/image";
import Flicking from "@egjs/react-flicking";

interface GalleryProps {
  images: Array<string>;
}

export default function Gallery({images} : GalleryProps){
  const [selectedImage , setSelectedImage] = useState(images[0]);

  const changeImage = (imageUrl: string) =>{
    setSelectedImage(imageUrl);
  }

  return(
    <div className="">
      <div className="mx-auto border w-full max-w-sm rounded-lg mb-3">
        <Image alt={"image"} width={512} height={512} src={selectedImage}></Image>
      </div>
      <div className="border max-w-sm mx-auto rounded-lg flex items-center justify-center p-2 gap-x-4">
        <Flicking
          bound={true}
          renderOnlyVisible={true}
        >
          {images?.map((imageUrl: string, index: number) => (
            <div onClick={() => changeImage(imageUrl)} className="hover:bg-zinc-200 border w-full max-w-24 p-2 rounded-lg mr-2 cursor-pointer">
            <Image alt={"image"} width={512} height={512} src={imageUrl}></Image>
          </div>
          ))}
        </Flicking>
      </div>
    </div>
  )
}