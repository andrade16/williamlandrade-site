"use client";

import styled from "@emotion/styled";

import { Container, Section, Grid, Flex } from "@/components/layout";
import { theme } from "@/theme";

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
          <PageTitle>About Me</PageTitle>
          <Bio>
            <p>
              Hi! I'm William Andrade, a passionate full-stack developer with a
              love for creating beautiful, functional web experiences.
            </p>
            <p>
              I specialize in modern web technologies and have a keen eye for
              design. My goal is to build applications that not only work
              flawlessly but also delight users with intuitive interfaces.
            </p>
          </Bio>
        </Container>
      </Section>

      <Section bgColor={theme.colors.background.secondary}>
        <Container>
          <SectionTitle>Skills & Expertise</SectionTitle>
          <Grid cols={1} mdCols={2} lgCols={3} gap="2rem">
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

            <SkillCard>
              <h3>Backend Development</h3>
              <ul>
                <li>Node.js & Express</li>
                <li>RESTful APIs</li>
                <li>Database Design</li>
                <li>Authentication & Security</li>
                <li>API Integration</li>
              </ul>
            </SkillCard>

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
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Grid cols={1} mdCols={3} gap="3rem">
            <StatCard>
              <div className="number">5+</div>
              <div className="label">Years Experience</div>
            </StatCard>
            <StatCard>
              <div className="number">50+</div>
              <div className="label">Projects Completed</div>
            </StatCard>
            <StatCard>
              <div className="number">100%</div>
              <div className="label">Client Satisfaction</div>
            </StatCard>
          </Grid>
        </Container>
      </Section>

      <Section bgColor={theme.colors.background.secondary}>
        <Container narrow>
          <SectionTitle>Experience</SectionTitle>

          <ExperienceCard>
            <h3>Senior Full Stack Developer</h3>
            <div className="role">Tech Company Inc.</div>
            <div className="period">2021 - Present</div>
            <p>
              Leading development of modern web applications using React,
              Next.js, and Node.js. Architecting scalable solutions and
              mentoring junior developers.
            </p>
          </ExperienceCard>

          <ExperienceCard>
            <h3>Full Stack Developer</h3>
            <div className="role">Digital Agency</div>
            <div className="period">2019 - 2021</div>
            <p>
              Built responsive websites and web applications for various
              clients. Specialized in React development and API integration.
            </p>
          </ExperienceCard>

          <ExperienceCard>
            <h3>Frontend Developer</h3>
            <div className="role">Startup Co.</div>
            <div className="period">2018 - 2019</div>
            <p>
              Developed user interfaces and implemented designs using modern
              frontend technologies. Collaborated with designers and backend
              developers.
            </p>
          </ExperienceCard>
        </Container>
      </Section>

      <Section>
        <Container narrow>
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
              opportunities.
            </p>
            <a
              href="mailto:hello@williamandrade.com"
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
              Get In Touch
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
