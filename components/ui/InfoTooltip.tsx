"use client";

import { useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/theme";

const TooltipContainer = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  margin-left: ${theme.spacing.xs};
`;

const IconCircle = styled.span`
  cursor: help;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${theme.colors.accent.main};
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.bold};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${theme.colors.accent.light};
    transform: scale(1.1);
  }
`;

const TooltipBubble = styled.div<{ isVisible: boolean }>`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background-color: ${theme.colors.background.primary};
  border: 1px solid ${theme.colors.border.default};
  border-radius: 8px;
  box-shadow: ${theme.shadows.lg};
  white-space: nowrap;
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
  z-index: 1000;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  transition: opacity 0.2s ease, visibility 0.2s ease;
  pointer-events: none;
  max-width: 250px;
  white-space: normal;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: ${theme.colors.border.default};
  }

  &::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: ${theme.colors.background.primary};
    z-index: 1;
  }
`;

interface InfoTooltipProps {
  content: string;
}

export function InfoTooltip({ content }: InfoTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TooltipContainer
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <IconCircle>i</IconCircle>
      <TooltipBubble isVisible={isVisible}>{content}</TooltipBubble>
    </TooltipContainer>
  );
}
