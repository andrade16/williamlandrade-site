"use client";

import styled from "@emotion/styled";

import { Container, Flex } from "@/components/layout";
import { theme } from "@/theme";

const HeaderWrapper = styled.header`
  background-color: ${theme.colors.background.primary};
  border-bottom: 1px solid ${theme.colors.border.default};
  padding: ${theme.spacing.md} 0;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  background-color: rgba(9, 9, 11, 0.8);

  ${theme.mediaQueries.md} {
    padding: ${theme.spacing.lg} 0;
  }
`;

const LogoLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
  }
`;

const Logo = styled.h1`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin: 0;
  cursor: pointer;

  ${theme.mediaQueries.md} {
    font-size: ${theme.typography.fontSize["2xl"]};
  }
`;

const Nav = styled.nav`
  display: none;

  ${theme.mediaQueries.md} {
    display: block;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: ${theme.spacing.lg};
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  color: ${theme.colors.text.secondary};
  font-weight: ${theme.typography.fontWeight.medium};
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    color: ${theme.colors.text.primary};
    text-decoration: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${theme.colors.accent.main};
    transition: width 0.2s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  font-size: ${theme.typography.fontSize.xl};
  color: ${theme.colors.text.primary};
  padding: ${theme.spacing.xs};

  ${theme.mediaQueries.md} {
    display: none;
  }
`;

export function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <Flex justify="space-between" align="center">
          <LogoLink href="/">
            <Logo>William Andrade</Logo>
          </LogoLink>

          <Nav>
            <NavList>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
            </NavList>
          </Nav>

          <MobileMenuButton aria-label="Toggle menu">☰</MobileMenuButton>
        </Flex>
      </Container>
    </HeaderWrapper>
  );
}
