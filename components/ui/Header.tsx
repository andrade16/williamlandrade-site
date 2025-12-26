"use client";

import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { Container, Flex } from "@/components/layout";
import { theme } from "@/theme";
import { ROUTES } from "@/lib/constants";

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
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;

  &:hover {
    text-decoration: none;
    transform: scale(1.05);
  }
`;

const LogoImage = styled(Image)`
  width: auto;
  height: 40px;

  ${theme.mediaQueries.md} {
    height: 48px;
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

const NavLink = styled.a<{ isActive?: boolean }>`
  color: ${(props) =>
    props.isActive ? theme.colors.text.primary : theme.colors.text.secondary};
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
    width: ${(props) => (props.isActive ? "100%" : "0")};
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
  font-size: ${theme.typography.fontSize["2xl"]};
  color: ${theme.colors.text.primary};
  padding: ${theme.spacing.xs};
  cursor: pointer;
  z-index: 1001;

  ${theme.mediaQueries.md} {
    display: none;
  }
`;

const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  backdrop-filter: blur(4px);
`;

const MobileMenuSidebar = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 280px;
  max-width: 85vw;
  background-color: ${theme.colors.background.secondary};
  border-left: 1px solid ${theme.colors.border.default};
  z-index: 1000;
  overflow-y: auto;
  box-shadow: ${theme.shadows.xl};
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.lg};
  border-bottom: 1px solid ${theme.colors.border.default};
`;

const MobileMenuTitle = styled.h2`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: ${theme.typography.fontSize["2xl"]};
  color: ${theme.colors.text.primary};
  cursor: pointer;
  padding: ${theme.spacing.xs};
  line-height: 1;
`;

const MobileNavList = styled.ul`
  list-style: none;
  padding: ${theme.spacing.lg} 0;
  margin: 0;
`;

const MobileNavItem = styled.li`
  margin: 0;
`;

const MobileNavLink = styled.a<{ isActive?: boolean }>`
  display: block;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  color: ${(props) =>
    props.isActive ? theme.colors.text.primary : theme.colors.text.secondary};
  font-weight: ${theme.typography.fontWeight.medium};
  font-size: ${theme.typography.fontSize.lg};
  transition: all 0.2s ease;
  border-left: 3px solid ${(props) =>
    props.isActive ? theme.colors.accent.main : "transparent"};
  background-color: ${(props) =>
    props.isActive ? theme.colors.background.primary : "transparent"};

  &:hover {
    color: ${theme.colors.text.primary};
    background-color: ${theme.colors.background.primary};
    border-left-color: ${theme.colors.accent.main};
    text-decoration: none;
  }
`;

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <HeaderWrapper>
        <Container>
          <Flex justify="space-between" align="center">
            <LogoLink href={ROUTES.HOME}>
              <LogoImage
                src="/icon.svg"
                alt="William Andrade"
                width={48}
                height={48}
              />
            </LogoLink>

            <Nav>
              <NavList>
                <NavItem>
                  <NavLink href={ROUTES.HOME} isActive={pathname === ROUTES.HOME}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href={ROUTES.ABOUT}
                    isActive={pathname === ROUTES.ABOUT}
                  >
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href={ROUTES.PROJECTS}
                    isActive={pathname === ROUTES.PROJECTS}
                  >
                    Projects
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href={ROUTES.CONTACT}
                    isActive={pathname === ROUTES.CONTACT}
                  >
                    Contact
                  </NavLink>
                </NavItem>
              </NavList>
            </Nav>

            <MobileMenuButton
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </MobileMenuButton>
          </Flex>
        </Container>
      </HeaderWrapper>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <MobileMenuOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobileMenu}
            />
            <MobileMenuSidebar
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <MobileMenuHeader>
                <MobileMenuTitle>Menu</MobileMenuTitle>
                <CloseButton onClick={closeMobileMenu} aria-label="Close menu">
                  ✕
                </CloseButton>
              </MobileMenuHeader>
              <MobileNavList>
                <MobileNavItem>
                  <MobileNavLink
                    href={ROUTES.HOME}
                    onClick={closeMobileMenu}
                    isActive={pathname === ROUTES.HOME}
                  >
                    Home
                  </MobileNavLink>
                </MobileNavItem>
                <MobileNavItem>
                  <MobileNavLink
                    href={ROUTES.ABOUT}
                    onClick={closeMobileMenu}
                    isActive={pathname === ROUTES.ABOUT}
                  >
                    About
                  </MobileNavLink>
                </MobileNavItem>
                <MobileNavItem>
                  <MobileNavLink
                    href={ROUTES.PROJECTS}
                    onClick={closeMobileMenu}
                    isActive={pathname === ROUTES.PROJECTS}
                  >
                    Projects
                  </MobileNavLink>
                </MobileNavItem>
                <MobileNavItem>
                  <MobileNavLink
                    href={ROUTES.CONTACT}
                    onClick={closeMobileMenu}
                    isActive={pathname === ROUTES.CONTACT}
                  >
                    Contact
                  </MobileNavLink>
                </MobileNavItem>
              </MobileNavList>
            </MobileMenuSidebar>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
