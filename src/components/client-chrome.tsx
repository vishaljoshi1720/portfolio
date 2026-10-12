"use client";

import { CustomCursor } from "@/components/custom-cursor";
import { PageLoader } from "@/components/page-loader";
import { ScrollProgress } from "@/components/scroll-progress";

/** Browser-only chrome — mounts after client hydration */
export function ClientChrome() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <CustomCursor />
    </>
  );
}
