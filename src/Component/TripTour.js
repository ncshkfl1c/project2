import React from "react";
import clsx from "clsx"
import style from "./TripTour.module.scss";
import TripComp from "./Trip/TripComp";

function TripTour() {
  return (
    <div className={clsx(style.container)}>
      <div className={clsx(style.content)}>Inspiration for your next trip</div>
      <div className={clsx(style.tripTour)} style={{ minWidth: "980px" }}>
      
          <TripComp img="./img/img2.webp" title="Móng Cái District" distance="277" color="#cc2d4a"/>
          <TripComp img="./img/img3.webp" title="Yên Bái" distance="124" color="#d93b30"/>
          <TripComp img="./img/img4.webp" title="Hà Nội" distance="2" color="#de3151"/>
          <TripComp img="./img/img5.webp" title="Hạ Long" distance="124" color="#bc1a6e"/>

      </div>
    </div>
  );
}

export default TripTour;
