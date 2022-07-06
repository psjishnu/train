import React from "react";
import { post, second } from "./index.module.scss";

function Post() {
  return (
    <>
      <div className={post}></div>
      <div className={`${post} ${second}`}></div>
    </>
  );
}

export default Post;
