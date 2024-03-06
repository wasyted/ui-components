'use client'
import Flicking from "@egjs/react-flicking";
import Banner from '@/components/ecommerce/Banner';
import "@egjs/react-flicking/dist/flicking.css";
import { useState } from "react";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";

export default () => {
  const [panels, setPanels] = useState([<Banner />, <Banner1 />, <Banner2 />, <Banner />, <Banner1 />, <Banner2 />]);

  return (
    <div className="bg-slate-100 p-2">
      <Flicking bound={true} moveType={["strict", { count: 1 }]} defaultIndex={1} circular={true} renderOnlyVisible={true}>
        {panels.map(index => <div className="rounded-lg flex items-center justify-center flicking-panel mx-10" key={Math.random()}>{index}</div>)}
      </Flicking>
    </div>
  )
};