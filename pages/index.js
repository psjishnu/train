import React from "react";
import Bogie from "./components/Bogie";
import InterLock from "./components/Bogie/Interlock";
import Engine from "./components/engine";
import {
  train,
  trainArea,
  rails,
  electricLine,
  railway,
} from "./index.module.scss";
import Post from "./components/Post";

function index() {
  return (
    <div className={trainArea}>
      <div className={railway}>
        <div className={electricLine}></div>
        <div className={train}>
          <Engine />
          <InterLock />
          <Bogie />
          <InterLock />
          <Bogie />
          <InterLock />
          <Bogie />
          <InterLock />
          <Bogie />
          <InterLock />
          <Bogie />
        </div>
        <Post />
        <div className={rails}></div>
      </div>
    </div>
  );
}

export default index;
