"use client";

import { useEffect } from "react";

export default function AdSense() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", margin: "30px 0" }}
      data-ad-client="ca-pub-9417797128494503"
      data-ad-slot="1159298293"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}