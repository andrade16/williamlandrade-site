"use client";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { useState, ReactNode } from "react";

export default function EmotionRegistry({ children }: { children: ReactNode }) {
  const [cache] = useState(() => {
    const cache = createCache({ key: "css", prepend: true });
    cache.compat = true;
    return cache;
  });

  useServerInsertedHTML(() => {
    const keys = Object.keys(cache.inserted);
    const values = Object.values(cache.inserted);
    return (
      <style
        data-emotion={`${cache.key} ${keys.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: values.join(" "),
        }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
