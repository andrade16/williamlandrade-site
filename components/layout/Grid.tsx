import styled from "@emotion/styled";

import { theme } from "@/theme";

interface GridProps {
  gap?: string;
  cols?: number;
  smCols?: number;
  mdCols?: number;
  lgCols?: number;
  xlCols?: number;
}

interface GridItemProps {
  colSpan?: number;
  rowSpan?: number;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  gap: ${(props) => props.gap || theme.spacing.md};
  grid-template-columns: repeat(${(props) => props.cols || 1}, 1fr);

  ${theme.mediaQueries.sm} {
    grid-template-columns: repeat(
      ${(props) => props.smCols || props.cols || 2},
      1fr
    );
  }

  ${theme.mediaQueries.md} {
    grid-template-columns: repeat(
      ${(props) => props.mdCols || props.smCols || props.cols || 3},
      1fr
    );
  }

  ${theme.mediaQueries.lg} {
    grid-template-columns: repeat(
      ${(props) =>
        props.lgCols || props.mdCols || props.smCols || props.cols || 4},
      1fr
    );
  }

  ${theme.mediaQueries.xl} {
    grid-template-columns: repeat(
      ${(props) =>
        props.xlCols ||
        props.lgCols ||
        props.mdCols ||
        props.smCols ||
        props.cols ||
        4},
      1fr
    );
  }
`;

export const GridItem = styled.div<GridItemProps>`
  ${(props) =>
    props.colSpan &&
    `
    grid-column: span ${props.colSpan};
  `}

  ${(props) =>
    props.rowSpan &&
    `
    grid-row: span ${props.rowSpan};
  `}
`;
