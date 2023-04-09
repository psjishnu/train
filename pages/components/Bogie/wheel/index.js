import React from "react";
import { wheel, axle } from "./index.module.scss";

function Wheel() {
  return (
    <div className={wheel}>
      <div className={axle} />
    </div>
  );
}

export default Wheel;
