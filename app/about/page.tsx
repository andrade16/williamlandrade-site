"use client";

import styled from "@emotion/styled";
import { track } from "@vercel/analytics";

import { Container, Section, Grid, Flex } from "@/components/layout";
import { theme } from "@/theme";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

const PageTitle = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin-bottom: ${theme.spacing.lg};
  text-align: center;
  background: linear-gradient(
    135deg,
    ${theme.colors.text.primary} 0%,
    ${theme.colors.accent.main} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize["3xl"]};
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.text.primary};

  ${theme.mediaQueries.md} {
    font-size: ${theme.typography.fontSize["4xl"]};
  }
`;

const Bio = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  p {
    font-size: ${theme.typography.fontSize.lg};
    color: ${theme.colors.text.secondary};
    line-height: ${theme.typography.lineHeight.relaxed};
    margin-bottom: ${theme.spacing.lg};

    ${theme.mediaQueries.md} {
      font-size: ${theme.typography.fontSize.xl};
    }
  }
`;

const SkillCard = styled.div`
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
    font-size: ${theme.typography.fontSize.xl};
    margin-bottom: ${theme.spacing.md};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    color: ${theme.colors.text.secondary};
    padding: ${theme.spacing.xs} 0;
    position: relative;
    padding-left: ${theme.spacing.lg};

    &::before {
      content: "▹";
      position: absolute;
      left: 0;
      color: ${theme.colors.accent.main};
      font-size: ${theme.typography.fontSize.xl};
    }
  }
`;

const ExperienceCard = styled.div`
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.background.secondary};
  border-left: 3px solid ${theme.colors.accent.main};
  border-radius: 8px;
  margin-bottom: ${theme.spacing.lg};

  h3 {
    color: ${theme.colors.text.primary};
    font-size: ${theme.typography.fontSize["2xl"]};
    margin-bottom: ${theme.spacing.sm};
  }

  .role {
    color: ${theme.colors.accent.main};
    font-size: ${theme.typography.fontSize.lg};
    font-weight: ${theme.typography.fontWeight.medium};
    margin-bottom: ${theme.spacing.xs};
  }

  .period {
    color: ${theme.colors.text.muted};
    font-size: ${theme.typography.fontSize.sm};
    margin-bottom: ${theme.spacing.md};
  }

  p {
    color: ${theme.colors.text.secondary};
    line-height: ${theme.typography.lineHeight.relaxed};
    margin-bottom: 0;
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: ${theme.spacing.xl};

  .number {
    font-size: ${theme.typography.fontSize["5xl"]};
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.accent.main};
    line-height: 1;
    margin-bottom: ${theme.spacing.sm};
  }

  .label {
    color: ${theme.colors.text.secondary};
    font-size: ${theme.typography.fontSize.lg};
  }
`;

export default function AboutPage() {
  return (
    <>
      <Section center paddingY={theme.spacing.xxxl}>
        <Container>
          <ScrollReveal>
            <PageTitle>About Me</PageTitle>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Bio>
              <p>
                Hi! I'm William Andrade, a passionate full-stack developer with
                a love for creating beautiful, functional web experiences.
              </p>
              <p>
                I specialize in modern web technologies and have a keen eye for
                design. My goal is to build applications that not only work
                flawlessly but also delight users with intuitive interfaces.
              </p>
            </Bio>
          </ScrollReveal>
        </Container>
      </Section>

      <Section bgColor={theme.colors.background.secondary} id="skills">
        <Container>
          <ScrollReveal>
            <SectionTitle>Skills & Expertise</SectionTitle>
          </ScrollReveal>
          <Grid cols={1} mdCols={2} lgCols={3} gap="2rem">
            <ScrollReveal delay={0.1}>
              <SkillCard>
                <h3>Frontend Development</h3>
                <ul>
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>CSS-in-JS (Emotion, styled-components)</li>
                  <li>Responsive Design</li>
                  <li>State Management (Redux)</li>
                </ul>
              </SkillCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <SkillCard>
                <h3>Backend Development</h3>
                <ul>
                  <li>Node.js & Express</li>
                  <li>Python</li>
                  <li>RESTful APIs</li>
                  <li>API Design</li>
                  <li>API Integration</li>
                  <li>Authentication & Security</li>
                </ul>
              </SkillCard>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <SkillCard>
                <h3>Tools & Workflow</h3>
                <ul>
                  <li>Git & GitHub</li>
                  <li>CI/CD Pipelines</li>
                  <li>Docker</li>
                  <li>Testing (Jest, React Testing Library)</li>
                  <li>Agile Methodologies</li>
                </ul>
              </SkillCard>
            </ScrollReveal>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Grid cols={1} mdCols={3} gap="3rem">
            <ScrollReveal delay={0.1}>
              <StatCard>
                <AnimatedCounter value={9} suffix="+" className="number" />
                <div className="label">Years Experience</div>
              </StatCard>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <StatCard>
                <AnimatedCounter value={25} suffix="+" className="number" />
                <div className="label">Projects Completed</div>
              </StatCard>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <StatCard>
                <AnimatedCounter value={100} suffix="%" className="number" />
                <div className="label">Client Satisfaction</div>
              </StatCard>
            </ScrollReveal>
          </Grid>
        </Container>
      </Section>

      <Section bgColor={theme.colors.background.secondary} id="experience">
        <Container narrow>
          <ScrollReveal>
            <SectionTitle>Experience</SectionTitle>
          </ScrollReveal>

          <ScrollReveal delay={0.1} direction="left">
            <ExperienceCard>
              <h3>Senior Software Engineer II</h3>
              <div className="role">Eaze Inc.</div>
              <div className="period">September 2021 - December 2025</div>
              <p>
                At Eaze, I focused on building and improving key consumer-facing
                experiences across the web platform. I helped ship high-impact
                features like brand pages and city landing pages, integrated
                third-party services for customer support and identity
                verification, and contributed to shared testing infrastructure
                to improve reliability across teams. Working primarily in React
                and TypeScript, I also collaborated across the stack, making
                backend contributions where needed to support new features and
                fixes.
              </p>
            </ExperienceCard>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="left">
            <ExperienceCard>
              <h3>Senior Full Stack Software Engineer</h3>
              <div className="role">Capital One</div>
              <div className="period">December 2018 - September 2021</div>
              <p>
                At Capital One, I worked on a mix of front-end and backend
                projects focused on improving core customer and internal
                experiences. I helped build and own features like a
                next-generation transaction search, internal monitoring
                dashboards, and a shared React component library, while also
                leading improvements around accessibility and search
                functionality. I also developed backend APIs to support product
                features such as ratings and reviews, working with modern tools
                like React, TypeScript, NestJS, and Elasticsearch.
              </p>
            </ExperienceCard>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="left">
            <ExperienceCard>
              <h3>Software Engineer</h3>
              <div className="role">HumanGeo</div>
              <div className="period">June 2016 - November 2018</div>
              <p>
                At HumanGeo, I worked on data-driven web applications used in
                government and analytical contexts. I helped design and build a
                React/Redux tracking platform, maintained and enhanced existing
                Angular applications, and implemented tools like PDF generation
                to turn web-based insights into shareable reports. I also
                supported internal teams by writing Python scripts for data
                collection and contributing to code reviews and QA efforts.
              </p>
            </ExperienceCard>
          </ScrollReveal>

          <ScrollReveal delay={0.4} direction="left">
            <ExperienceCard>
              <h3>Software Engineer</h3>
              <div className="role">Northrup Grumman Corporation</div>
              <div className="period">January 2015 - June 2016</div>
              <p>
                At Northrop Grumman, I worked on a Computer Aided Dispatch
                system built with C# and .NET, contributing to both new
                development and ongoing maintenance of legacy Windows
                applications. I collaborated directly with customers to refine
                requirements and deliver functionality that met real operational
                needs. I also supported quality assurance efforts across
                multiple projects to help ensure reliability and stability.
              </p>
            </ExperienceCard>
          </ScrollReveal>
        </Container>
      </Section>

      <Section>
        <Container narrow>
          <ScrollReveal>
            <div style={{ textAlign: "center" }}>
              <SectionTitle>Let's Work Together</SectionTitle>
              <p
                style={{
                  fontSize: theme.typography.fontSize.xl,
                  color: theme.colors.text.secondary,
                  marginBottom: theme.spacing.xl,
                }}
              >
                I'm always interested in hearing about new projects and
                opportunities. Feel free to download a copy of my resume below!
              </p>
              <a
                href="/resume.pdf"
                download="William_Andrade_Resume.pdf"
                onClick={() => {
                  track("Resume Downloaded", {
                    location: "About Page",
                    timestamp: new Date().toISOString(),
                  });
                }}
                style={{
                  display: "inline-block",
                  padding: `${theme.spacing.md} ${theme.spacing.xl}`,
                  backgroundColor: theme.colors.accent.main,
                  color: theme.colors.text.primary,
                  fontWeight: theme.typography.fontWeight.semibold,
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
              >
                📄 Download Resume
              </a>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
}
