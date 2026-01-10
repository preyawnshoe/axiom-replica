"use client";

import { useEffect } from "react";

export function RemixIconLoader() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/remixicon@4/fonts/remixicon.css";
    document.head.appendChild(link);
  }, []);

  return null;
}
