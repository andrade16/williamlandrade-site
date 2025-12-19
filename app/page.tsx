"use client";

import styled from "@emotion/styled";

import { Container, Section, Grid, Flex } from "@/components/layout";
import { Avatar } from "@/components";
import { theme } from "@/theme";

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 8vw, 5rem);
  margin-bottom: ${theme.spacing.lg};
  background: linear-gradient(
    135deg,
    ${theme.colors.text.primary} 0%,
    ${theme.colors.accent.main} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: ${theme.typography.fontSize.xl};
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.xl};

  ${theme.mediaQueries.md} {
    font-size: ${theme.typography.fontSize["2xl"]};
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background-color: ${theme.colors.accent.main};
  color: ${theme.colors.text.primary};
  font-weight: ${theme.typography.fontWeight.semibold};
  border-radius: 8px;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: ${theme.colors.accent.light};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.glow};
    text-decoration: none;
  }
`;

const FeatureCard = styled.div`
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.background.secondary};
  border: 1px solid ${theme.colors.border.default};
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${theme.colors.accent.main};
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }

  h3 {
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.md};
  }

  p {
    color: ${theme.colors.text.secondary};
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
  color: ${theme.colors.text.primary};
`;

export default function Home() {
  return (
    <>
      <Section fullHeight center>
        <Container>
          <HeroTitle>William Andrade</HeroTitle>
          <Avatar
            src="/images/william_profile_pic.jpg"
            size="350px"
            alt="William Andrade"
          />
          <Subtitle>Full Stack Developer & Designer</Subtitle>
          <Subtitle>
            Building modern web experiences with cutting-edge technologies
          </Subtitle>
          <CTAButton href="#contact">Get In Touch</CTAButton>
        </Container>
      </Section>

      <Section bgColor={theme.colors.background.secondary}>
        <Container>
          <SectionTitle>What I Do</SectionTitle>
          <Grid cols={1} mdCols={2} lgCols={3} gap="2rem">
            <FeatureCard>
              <h3>Responsive Design</h3>
              <p>
                Mobile-first approach ensuring seamless experiences across all
                devices
              </p>
            </FeatureCard>
            <FeatureCard>
              <h3>Modern Stack</h3>
              <p>
                Using Next.js, React, TypeScript, and modern CSS-in-JS solutions
              </p>
            </FeatureCard>
            <FeatureCard>
              <h3>Performance</h3>
              <p>Optimized builds with focus on speed and user experience</p>
            </FeatureCard>
            <FeatureCard>
              <h3>Clean Code</h3>
              <p>Well-structured, maintainable, and scalable architecture</p>
            </FeatureCard>
            <FeatureCard>
              <h3>Design Systems</h3>
              <p>Comprehensive theming with reusable component libraries</p>
            </FeatureCard>
            <FeatureCard>
              <h3>User Experience</h3>
              <p>Smooth animations and intuitive interactions</p>
            </FeatureCard>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container narrow>
          <SectionTitle>Get Started</SectionTitle>
          <Flex direction="column" gap="1.5rem" align="center">
            <FeatureCard style={{ width: "100%", textAlign: "center" }}>
              <h3>Ready to Build Something Amazing?</h3>
              <p style={{ marginBottom: theme.spacing.lg }}>
                This starter template is fully customizable with a complete
                design system, responsive layouts, and modern best practices.
              </p>
              <CTAButton href="#projects">View Projects</CTAButton>
            </FeatureCard>
          </Flex>
        </Container>
      </Section>
    </>
  );
}
