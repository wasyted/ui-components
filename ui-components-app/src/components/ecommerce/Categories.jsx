'use client'
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { useState } from "react";
import CategoryCard from "./CategoryCard";
import { ComputerRounded, PhoneIphoneRounded, Watch, CameraAlt, Headphones, VideogameAsset } from "@mui/icons-material";

export default () => {
  const [panels, setPanels] = useState([{name: 'PC and Laptop', icon: <ComputerRounded /> }, {name: 'Phones' , icon: <PhoneIphoneRounded /> }, {name: 'Watches' , icon: <Watch /> }, {name: 'Cameras', icon: <CameraAlt /> },{name: 'Headphones', icon: <Headphones /> },{name: 'Gaming', icon: <VideogameAsset /> } ]);

  return (
    <div className="max-w-full">
      <p className="text-2xl pb-8 pt-8 font-bold">Browse by Category</p>
      <Flicking bound={true} renderOnlyVisible={true}>
        {panels.map(category => <div className="rounded-lg flex items-center justify-center flicking-panel mx-3" key={Math.random()}><CategoryCard categoryName={category.name} categoryIcon={category.icon}/></div>)}
      </Flicking>
    </div>
  )
};