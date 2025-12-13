import { css } from '@emotion/react'

import { theme } from '@/theme'

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.base};
    font-weight: ${theme.typography.fontWeight.normal};
    line-height: ${theme.typography.lineHeight.normal};
    color: ${theme.colors.text.primary};
    background-color: ${theme.colors.background.primary};
    min-height: 100vh;
    overflow-x: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: ${theme.typography.fontWeight.bold};
    line-height: ${theme.typography.lineHeight.tight};
  }

  h1 {
    font-size: ${theme.typography.fontSize['4xl']};
    ${theme.mediaQueries.md} {
      font-size: ${theme.typography.fontSize['5xl']};
    }
  }

  h2 {
    font-size: ${theme.typography.fontSize['3xl']};
    ${theme.mediaQueries.md} {
      font-size: ${theme.typography.fontSize['4xl']};
    }
  }

  h3 {
    font-size: ${theme.typography.fontSize['2xl']};
    ${theme.mediaQueries.md} {
      font-size: ${theme.typography.fontSize['3xl']};
    }
  }

  h4 {
    font-size: ${theme.typography.fontSize.xl};
    ${theme.mediaQueries.md} {
      font-size: ${theme.typography.fontSize['2xl']};
    }
  }

  h5 {
    font-size: ${theme.typography.fontSize.lg};
  }

  h6 {
    font-size: ${theme.typography.fontSize.base};
  }

  p {
    margin: 0;
    margin-bottom: ${theme.spacing.md};
  }

  a {
    color: ${theme.colors.text.primary};
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      color: ${theme.colors.accent.main};
      text-decoration: underline;
    }
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style-position: inside;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
  }
`
