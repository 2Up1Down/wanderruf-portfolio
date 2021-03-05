import React, { useState, useEffect } from "react";
import { CuratorWrapper } from "./CuratorFeed.elements";
import Button from "./../globals/Button";

const CuratorFeed = () => {
  const [count, setCount] = useState(0);

  // const data = {};

  useEffect(async () => {
    document.title = `You clicked ${count} times on the button`;
  });

  return (
    <CuratorWrapper>
      <div id="curator-feed-default-feed-layout">
        <a href="https://curator.io" target="_blank" class="crt-logo crt-tag">
          Powered by Curator.io
        </a>
        <h2>{count}</h2>
        <Button onClick={() => setCount(count + 1)}>Click me</Button>
      </div>
    </CuratorWrapper>
  );
};

export default CuratorFeed;
