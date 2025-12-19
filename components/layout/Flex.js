import styled from "@emotion/styled";

import { theme } from "@/theme";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  gap: ${(props) => props.gap || theme.spacing.md};
  flex-wrap: ${(props) => props.wrap || "nowrap"};

  ${(props) =>
    props.responsive &&
    `
    flex-direction: column;

    ${theme.mediaQueries.md} {
      flex-direction: ${props.direction || "row"};
    }
  `}
`;

export const FlexItem = styled.div`
  ${(props) =>
    props.flex &&
    `
    flex: ${props.flex};
  `}

  ${(props) =>
    props.grow !== undefined &&
    `
    flex-grow: ${props.grow};
  `}

  ${(props) =>
    props.shrink !== undefined &&
    `
    flex-shrink: ${props.shrink};
  `}

  ${(props) =>
    props.basis &&
    `
    flex-basis: ${props.basis};
  `}
`;
