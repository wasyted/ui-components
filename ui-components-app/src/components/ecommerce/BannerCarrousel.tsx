'use client'

import { useState, useRef, useEffect, ChangeEvent } from "react";
import Flicking, { ChangedEvent, MoveEvent, SelectEvent } from "@egjs/react-flicking";
import { Pagination } from "@egjs/flicking-plugins";
import { Arrow, AutoPlay } from "@egjs/flicking-plugins";
import { ViewportSlot } from "@egjs/react-flicking";
import Banner from '@/components/ecommerce/Banner';
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/arrow.css";
import "@egjs/flicking-plugins/dist/pagination.css";

export default () => {
  const [panels, setPanels] = useState([<Banner />, <Banner1 />, <Banner2 />]);
  const plugins = [new AutoPlay({ duration: 200000, direction: "NEXT", stopOnHover: false }), new Pagination({ type: 'bullet' })];
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
        renderOnlyVisible={true}
        adaptive={true}
      >
        {panels.map((panel, index) => (
          <div
            className="rounded-lg flex items-center justify-center mx-2 flicking-panel transition-all"
            id={panel.props.style}
            // style={{
            //   opacity: index === currentIndex ? 1 : 0.25,
            //   filter: index === currentIndex ? 'blur(0)' : 'blur(1px)',
            //   ...panel.props.style // Merge with the style defined in the panel's props
            // }}// Adjust opacity based on visibility
          >
            {panel}
          </div>
        ))}
          <ViewportSlot>
            <div className="block flicking-pagination"></div>
          </ViewportSlot>
      </Flicking>
    </div>
  );
};