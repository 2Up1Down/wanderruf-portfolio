import React, { useState, useEffect } from "react";
import { CuratorWrapper } from "./CuratorFeed.elements";
import Button from "./../globals/Button";
import useCurator from "./../../hooks/useCurator";

const CuratorFeed = () => {
  const [count, setCount] = useState(0);

  // const data = {};

  // useEffect(() => {
  //   async function getFeed() {
  //     var i,
  //       e,
  //       d = document,
  //       s = "script";
  //     i = d.createElement("script");
  //     i.async = 1;
  //     i.src =
  //       "https://cdn.curator.io/published/b1648a76-9b37-4004-a47a-9b89c97d686e.js";
  //     e = d.getElementsByTagName(s)[0];
  //     e.parentNode.insertBefore(i, e);
  //   }

  //   getFeed();
  // });

  useCurator();

  return (
    <CuratorWrapper>
      <div id="curator-feed-default-feed-layout">
        <a
          href="https://curator.io"
          target="_blank"
          class="crt-logo crt-tag"
          rel="noreferrer"
        >
          Powered by Curator.io
        </a>
        <h2>{count}</h2>
        <Button onClick={() => setCount(count + 1)}>Click me</Button>
      </div>
    </CuratorWrapper>
  );
};

export default CuratorFeed;
