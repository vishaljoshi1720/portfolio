"use client";

import { CustomCursor } from "@/components/custom-cursor";
import { ScrollProgress } from "@/components/scroll-progress";

/** Browser-only chrome — mounts after client hydration */
export function ClientChrome() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
    </>
  );
}
