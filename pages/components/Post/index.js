import React from "react";
import { post, second } from "./index.module.scss";

function Post() {
  return (
    <>
      <div className={post} />
      <div className={`${post} ${second}`} />
    </>
  );
}

export default Post;
