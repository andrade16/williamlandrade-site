import styled from "@emotion/styled";

import { theme } from "@/theme";

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${theme.spacing.md};
  padding-right: ${theme.spacing.md};

  ${theme.mediaQueries.sm} {
    max-width: ${theme.breakpoints.sm};
    padding-left: ${theme.spacing.lg};
    padding-right: ${theme.spacing.lg};
  }

  ${theme.mediaQueries.md} {
    max-width: ${theme.breakpoints.md};
  }

  ${theme.mediaQueries.lg} {
    max-width: ${theme.breakpoints.lg};
  }

  ${theme.mediaQueries.xl} {
    max-width: ${theme.breakpoints.xl};
  }

  ${theme.mediaQueries.xxl} {
    max-width: ${theme.breakpoints.xxl};
  }

  ${(props) =>
    props.fluid &&
    `
    max-width: 100%;
  `}

  ${(props) =>
    props.narrow &&
    `
    ${theme.mediaQueries.lg} {
      max-width: 960px;
    }
  `}
`;
