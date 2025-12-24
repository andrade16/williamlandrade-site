"use client";

import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import { theme } from "@/theme";

const BackToTopButton = styled(motion.button)`
  position: fixed;
  bottom: ${theme.spacing.xl};
  right: ${theme.spacing.xl};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${theme.colors.accent.main};
  color: ${theme.colors.text.primary};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.typography.fontSize["2xl"]};
  box-shadow: ${theme.shadows.lg};
  z-index: 50;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${theme.colors.accent.hover};
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.xl};
  }

  &:active {
    transform: translateY(-2px);
  }

  ${theme.mediaQueries.md} {
    bottom: ${theme.spacing.xxl};
    right: ${theme.spacing.xxl};
    width: 56px;
    height: 56px;
  }
`;

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <BackToTopButton
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          aria-label="Back to top"
        >
          ↑
        </BackToTopButton>
      )}
    </AnimatePresence>
  );
}
