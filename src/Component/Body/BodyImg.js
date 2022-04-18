import React from "react";
import "../../index.css"
import style from "./BodyImg.module.scss";
import clsx from "clsx";

function BodyImg() {
  return (
    <div style={{ display: "flex", justifyContent: "center", height:"40vh" }}>
      <div className={clsx(style.imgBlock)}>
        <div className={clsx(style.textBox)}>Let your curiosity do the booking</div>
        <div className={clsx(style.btn)}>
          <span className={clsx(style.btn__text)}>I'm flexible</span>
        </div>
      </div>
    </div>
  );
}

export default BodyImg;
