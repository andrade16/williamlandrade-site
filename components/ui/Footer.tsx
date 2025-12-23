"use client";

import styled from "@emotion/styled";

import { Container } from "@/components/layout";
import { theme } from "@/theme";

const FooterWrapper = styled.footer`
  background-color: ${theme.colors.background.secondary};
  color: ${theme.colors.text.primary};
  padding: ${theme.spacing.xxl} 0 ${theme.spacing.xl} 0;
  margin-top: auto;
  border-top: 1px solid ${theme.colors.border.default};
`;

const FooterContent = styled.div`
  display: grid;
  gap: ${theme.spacing.xl};
  grid-template-columns: 1fr;

  ${theme.mediaQueries.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.text.primary};
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterListItem = styled.li`
  margin-bottom: ${theme.spacing.sm};
`;

const FooterLink = styled.a`
  color: ${theme.colors.text.secondary};
  transition: all 0.2s ease;

  &:hover {
    color: ${theme.colors.accent.main};
    text-decoration: none;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: ${theme.spacing.xl};
  margin-top: ${theme.spacing.xl};
  border-top: 1px solid ${theme.colors.border.default};
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.sm};
`;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <FooterSection>
            <FooterTitle>About</FooterTitle>
            <FooterList>
              <FooterListItem>
                <FooterLink href="/about">About Me</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href="/about#skills">Skills</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href="/about#experience">Experience</FooterLink>
              </FooterListItem>
            </FooterList>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Connect</FooterTitle>
            <FooterList>
              <FooterListItem>
                <FooterLink
                  href="https://github.com/andrade16"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink
                  href="https://www.linkedin.com/in/william-andrade/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href="mailto:andrade.william61@gmail.com">
                  Email
                </FooterLink>
              </FooterListItem>
            </FooterList>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterList>
              <FooterListItem>
                <FooterLink href="/">Home</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href="/about">About</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href="/projects">Projects</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href="/contact">Contact</FooterLink>
              </FooterListItem>
            </FooterList>
          </FooterSection>
        </FooterContent>

        <Copyright>
          &copy; {currentYear} William Andrade. All rights reserved.
        </Copyright>
      </Container>
    </FooterWrapper>
  );
}
