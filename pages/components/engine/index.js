import React from "react";
import Wheel from "../Bogie/wheel";
import {
  engine,
  designLine,
  second,
  wheelBaseLeft,
  wheelBaseRight,
  engineBody,
  powerAntenna,
  line,
} from "./index.module.scss";
import Door from "../door";

function Engine() {
  return (
    <div className={engine}>
      <div className={powerAntenna} />
      <div className={designLine} />
      <div className={`${designLine} ${second}`} />
      <Door />
      <div className={engineBody}>
        <div className={line} />
        <div className={line} />
        <div className={line} />
        <div className={line} />
        <div className={line} />
      </div>
      <div className={wheelBaseLeft}>
        <Wheel />
        <Wheel />
      </div>
      <div className={wheelBaseRight}>
        <Wheel />
        <Wheel />
      </div>
    </div>
  );
}

export default Engine;
