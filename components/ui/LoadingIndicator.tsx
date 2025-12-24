"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "@/theme";

const LoadingBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  z-index: 9999;
  pointer-events: none;
`;

const LoadingBar = styled(motion.div)`
  height: 100%;
  background: linear-gradient(
    90deg,
    ${theme.colors.accent.main} 0%,
    ${theme.colors.accent.light} 50%,
    ${theme.colors.accent.main} 100%
  );
  box-shadow: 0 0 10px ${theme.colors.accent.main}80;
  transform-origin: left;
`;

export function LoadingIndicator() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Start loading when route changes
    setIsLoading(true);

    // Simulate loading completion after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <LoadingBarContainer>
      <AnimatePresence>
        {isLoading && (
          <LoadingBar
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 1, opacity: 0 }}
            transition={{
              scaleX: { duration: 0.3, ease: "easeOut" },
              opacity: { duration: 0.15, delay: 0.15 },
            }}
          />
        )}
      </AnimatePresence>
    </LoadingBarContainer>
  );
}
