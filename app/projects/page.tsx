"use client";

import styled from "@emotion/styled";
import Image from "next/image";

import { Container, Section, Grid } from "@/components/layout";
import { theme } from "@/theme";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

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

const Subtitle = styled.p`
  font-size: ${theme.typography.fontSize.xl};
  color: ${theme.colors.text.secondary};
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${theme.spacing.xxxl};
  line-height: ${theme.typography.lineHeight.relaxed};
`;

const ProjectCard = styled.div`
  background-color: ${theme.colors.background.secondary};
  border: 1px solid ${theme.colors.border.default};
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${theme.colors.accent.main};
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.xl};
  }
`;

const ProjectImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background-color: ${theme.colors.background.primary};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: ${theme.spacing.xl};
`;

const ProjectTitle = styled.h3`
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize["2xl"]};
  margin-bottom: ${theme.spacing.md};
`;

const ProjectDescription = styled.p`
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing.lg};
`;

const ProjectMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.lg};
`;

const ProjectTag = styled.span`
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  background-color: ${theme.colors.accent.main};
  color: ${theme.colors.text.primary};
  border-radius: 4px;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
`;

const ProjectLink = styled.a`
  display: inline-block;
  color: ${theme.colors.accent.main};
  font-weight: ${theme.typography.fontWeight.semibold};
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: ${theme.colors.accent.light};
    text-decoration: underline;
  }
`;

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Eaze",
      description:
        "Led development of consumer-facing web experiences including brand pages and city landing pages that drove user engagement. Integrated third-party services for customer support and identity verification while building shared testing infrastructure. Worked primarily with React, TypeScript, and Next.js, with full-stack contributions across the platform.",
      image: "/images/eaze_website.png",
      tags: ["React", "TypeScript", "Next.js", "Redux"],
      link: "https://www.eaze.com",
    },
    {
      id: 2,
      title: "Capital One",
      description:
        "Built next-generation transaction search and internal monitoring dashboards that improved customer and internal experiences. Led accessibility improvements and developed a shared React component library used across teams. Created backend APIs for ratings and reviews using React, TypeScript, NestJS, and Elasticsearch.",
      image: "/images/capital_one_website.png",
      tags: ["Angular", "TypeScript"],
      link: "https://www.capitalone.com",
    },
  ];

  return (
    <>
      <Section center paddingY={theme.spacing.xxxl}>
        <Container>
          <ScrollReveal>
            <PageTitle>My Projects</PageTitle>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Subtitle>
              A showcase of professional projects I've worked on, demonstrating
              my expertise in modern web development and design.
            </Subtitle>
          </ScrollReveal>
        </Container>
      </Section>

      <Section bgColor={theme.colors.background.secondary}>
        <Container>
          <Grid cols={1} mdCols={2} gap="3rem">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.2}>
                <ProjectCard>
                  <ProjectImageWrapper>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </ProjectImageWrapper>
                  <ProjectContent>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectMeta>
                      {project.tags.map((tag) => (
                        <ProjectTag key={tag}>{tag}</ProjectTag>
                      ))}
                    </ProjectMeta>
                    <ProjectDescription>
                      {project.description}
                    </ProjectDescription>
                    <ProjectLink
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Website →
                    </ProjectLink>
                  </ProjectContent>
                </ProjectCard>
              </ScrollReveal>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <ScrollReveal>
            <div style={{ textAlign: "center" }}>
              <h2
                style={{
                  fontSize: theme.typography.fontSize["3xl"],
                  color: theme.colors.text.primary,
                  marginBottom: theme.spacing.md,
                }}
              >
                Interested in Working Together?
              </h2>
              <p
                style={{
                  fontSize: theme.typography.fontSize.xl,
                  color: theme.colors.text.secondary,
                  marginBottom: theme.spacing.xl,
                }}
              >
                Let's discuss your next project and bring your ideas to life.
              </p>
              <a
                href="/contact"
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
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
}
