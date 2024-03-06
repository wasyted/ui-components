'use client'
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { useState } from "react";
import CategoryCard from "./CategoryCard";
import { ComputerRounded, PhoneIphoneRounded, Watch, CameraAlt, Headphones, VideogameAsset } from "@mui/icons-material";

export default () => {
  const [panels, setPanels] = useState([<ComputerRounded />, <PhoneIphoneRounded />, <Watch />, <CameraAlt />, <Headphones />, <VideogameAsset />]);

  return (
    <div className="">
      <p className="text-2xl pb-8 pt-8 font-bold">Browse by Category</p>
      <Flicking bound={true} moveType={["strict", { count: 1 }]} defaultIndex={1} circular={true} renderOnlyVisible={true}>
        {panels.map(icon => <div className="rounded-lg flex items-center justify-center flicking-panel mx-3" key={Math.random()}><CategoryCard categoryIcon={icon}/></div>)}
      </Flicking>
    </div>
  )
};