'use client'

import Flicking, { ChangedEvent, MoveEvent, SelectEvent } from "@egjs/react-flicking";
import { ViewportSlot } from "@egjs/react-flicking";
import Banner from '@/components/ecommerce/Banner';
import { useState, useRef, useEffect, ChangeEvent } from "react";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import { Arrow, AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/arrow.css";

export default () => {
  const [panels, setPanels] = useState([<Banner />, <Banner1 />, <Banner2 />, <Banner />, <Banner1 />, <Banner2 />]);
  const plugins = [new AutoPlay({ duration: 5000, direction: "NEXT", stopOnHover: false }), new Arrow()];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
  }, []);

  return (
    <div >
      <Flicking
        onChanged = {((e: ChangedEvent<Flicking>) => {
          setCurrentIndex(e.index);
        })}
        plugins={plugins}
        bound={true}
        moveType={["strict", { count: 1 }]}
        circular={true}
        renderOnlyVisible={true}
        adaptive={true}
      >
        {panels.map((panel, index) => (
          <div
            className="rounded-lg flex items-center justify-center mx-2 flicking-panel transition-all"
            key={index}
            style={{ opacity: index === currentIndex ? 1 : 0.25 }} // Adjust opacity based on visibility
          >
            {panel}
          </div>
        ))}
          <ViewportSlot>
          <div className="hidden sm:block">
            <span className="flicking-arrow-prev is-circle"></span>
            <span className="flicking-arrow-next is-circle"></span>
          </div>
          </ViewportSlot>
      </Flicking>
    </div>
  );
};