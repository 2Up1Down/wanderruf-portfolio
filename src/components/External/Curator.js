import React, { useEffect } from "react";
import { CuratorWrapper } from "./Curator.elements";

const Curator = () => {
  return (
    <CuratorWrapper>
      <div id="curator-feed-default-feed-layout">
        <a href="https://curator.io" target="_blank" class="crt-logo crt-tag">
          Powered by Curator.io
        </a>
      </div>
    </CuratorWrapper>
  );
};

export default Curator;
