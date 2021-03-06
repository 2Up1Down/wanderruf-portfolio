import React from "react";
import { CuratorWrapper, CuratorFeedLayout } from "./CuratorFeed.elements";
import useCurator from "../../hooks/useCurator";

const CuratorFeed = () => {
  useCurator();

  return (
    <CuratorWrapper>
      <CuratorFeedLayout id="curator-feed-default-feed-layout">
        <a
          href="https://curator.io"
          target="_blank"
          className="crt-logo crt-tag"
          rel="noreferrer"
        >
          Powered by Curator.io
        </a>
      </CuratorFeedLayout>
    </CuratorWrapper>
  );
};

export default CuratorFeed;
