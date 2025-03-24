"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import type { ReactNode } from "react";

export function ParallaxProviderWrapper({ children }: { children: ReactNode }) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}
