import React from "react";
import style from "./TripComp.module.scss";
import clsx from "clsx";
import {Link} from "react-router-dom"

function TripComp({ img, title, distance, color }) {
  return (
    <Link to={distance} className={clsx(style.container)} style={{ backgroundColor: color }}>
      <img src={img} alt={title} />
      <div className={clsx(style.content)}>
        <h2>{title}</h2>
        <h3>{distance} kilometers away</h3>
      </div>
    </Link>
  );
}

export default TripComp;
