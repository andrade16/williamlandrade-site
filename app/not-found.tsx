"use client";

import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { Container, Section } from "@/components/layout";
import { theme } from "@/theme";
import { ROUTES } from "@/lib/constants";

const NotFoundWrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NotFoundContent = styled.div`
  text-align: center;
  max-width: 600px;
`;

const NotFoundCode = styled.h1`
  font-size: clamp(6rem, 15vw, 10rem);
  font-weight: ${theme.typography.fontWeight.bold};
  background: linear-gradient(
    135deg,
    ${theme.colors.text.primary} 0%,
    ${theme.colors.accent.main} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  line-height: 1;
`;

const NotFoundTitle = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: ${theme.colors.text.primary};
  margin: ${theme.spacing.xl} 0 ${theme.spacing.md};
  font-weight: ${theme.typography.fontWeight.semibold};
`;

const NotFoundDescription = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing.xxl};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.a<{ variant?: "primary" | "secondary" }>`
  display: inline-block;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background-color: ${(props) =>
    props.variant === "secondary"
      ? "transparent"
      : theme.colors.accent.main};
  color: ${(props) =>
    props.variant === "secondary"
      ? theme.colors.text.secondary
      : theme.colors.text.primary};
  border: 1px solid
    ${(props) =>
      props.variant === "secondary"
        ? theme.colors.border.default
        : theme.colors.accent.main};
  font-weight: ${theme.typography.fontWeight.semibold};
  font-size: ${theme.typography.fontSize.md};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: ${(props) =>
      props.variant === "secondary"
        ? theme.colors.background.secondary
        : theme.colors.accent.hover};
    border-color: ${(props) =>
      props.variant === "secondary"
        ? theme.colors.accent.main
        : theme.colors.accent.hover};
    color: ${theme.colors.text.primary};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.md};
  }

  &:active {
    transform: translateY(0);
  }
`;

const Decoration = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${theme.colors.accent.main}20 0%,
    transparent 70%
  );
  pointer-events: none;
  z-index: -1;
`;

export default function NotFound() {
  return (
    <Section>
      <Container>
        <NotFoundWrapper>
          <Decoration
            style={{
              top: "-150px",
              right: "-150px",
            }}
          />
          <Decoration
            style={{
              bottom: "-150px",
              left: "-150px",
            }}
          />

          <NotFoundContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <NotFoundCode>404</NotFoundCode>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <NotFoundTitle>Page Not Found</NotFoundTitle>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <NotFoundDescription>
                Oops! The page you're looking for doesn't exist. It might have
                been moved or deleted, or you may have mistyped the URL.
              </NotFoundDescription>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <ButtonGroup>
                <Button href={ROUTES.HOME}>Go Home</Button>
                <Button href={ROUTES.CONTACT} variant="secondary">
                  Contact Me
                </Button>
              </ButtonGroup>
            </motion.div>
          </NotFoundContent>
        </NotFoundWrapper>
      </Container>
    </Section>
  );
}
