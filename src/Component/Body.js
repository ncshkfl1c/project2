import React from "react";
import clsx from "clsx";
import style from "./Body.module.scss";

function BodyHead() {
  return (
    <div className={clsx(style.container)}>
      <div className={clsx(style.boxColor)}>
        <h1 className={clsx(style.content)}>
          Help house 100,000 refugees fleeing Ukraine
        </h1>
        <div className={clsx(style.btn)}>Learn more</div>
      </div>
    </div>
  );
}

export default BodyHead;
