import React from "react";
import Door from "../door";
import {
  bogie,
  wheelBaseLeft,
  wheelBaseRight,
  designLine,
  second,
} from "./index.module.scss";
import Wheel from "./wheel";
import Window from "./window";

const Bogie = () => (
  <div className={bogie}>
    <Door />
    <Window />
    <Window />
    <Window />
    <Window />
    <Window />
    <Door />
    <div className={designLine} />
    <div className={`${designLine} ${second}`} />{" "}
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

export default Bogie;
