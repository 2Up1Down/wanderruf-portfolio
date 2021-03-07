import { useEffect } from "react";

export default function useCurator() {
  useEffect(() => {
    async function getFeed() {
      var i,
        e,
        d = document,
        s = "script";
      i = d.createElement("script");
      i.async = 1;
      i.src =
        "https://cdn.curator.io/published/b1648a76-9b37-4004-a47a-9b89c97d686e.js";
      e = d.getElementsByTagName(s)[0];
      e.parentNode.insertBefore(i, e);
    }

    getFeed();
  }, []);
}
