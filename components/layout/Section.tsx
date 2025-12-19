import styled from "@emotion/styled";

import { theme } from "@/theme";

interface SectionProps {
  paddingY?: string;
  bgColor?: string;
  fullHeight?: boolean;
  center?: boolean;
}

export const Section = styled.section<SectionProps>`
  padding-top: ${(props) => props.paddingY || theme.spacing.xxl};
  padding-bottom: ${(props) => props.paddingY || theme.spacing.xxl};
  background-color: ${(props) => props.bgColor || "transparent"};

  ${theme.mediaQueries.md} {
    padding-top: ${(props) => props.paddingY || theme.spacing.xxxl};
    padding-bottom: ${(props) => props.paddingY || theme.spacing.xxxl};
  }

  ${(props) =>
    props.fullHeight &&
    `
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}

  ${(props) =>
    props.center &&
    `
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  `}
`;
