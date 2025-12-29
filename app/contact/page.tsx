"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "@emotion/styled";

import { contactFormSchema, ContactFormData } from "@/lib/validations/contact";

import { Container, Section, Grid, Flex } from "@/components/layout";
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
  max-width: 600px;
  margin: 0 auto ${theme.spacing.xxxl};
  line-height: ${theme.typography.lineHeight.relaxed};
`;

const ContactCard = styled.div`
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.background.secondary};
  border: 1px solid ${theme.colors.border.default};
  border-radius: 12px;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    border-color: ${theme.colors.accent.main};
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }

  .icon {
    font-size: ${theme.typography.fontSize["4xl"]};
    margin-bottom: ${theme.spacing.md};
  }

  h3 {
    color: ${theme.colors.text.primary};
    font-size: ${theme.typography.fontSize.xl};
    margin-bottom: ${theme.spacing.sm};
  }

  p {
    color: ${theme.colors.text.secondary};
    margin-bottom: ${theme.spacing.sm};
  }

  a {
    color: ${theme.colors.accent.main};
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      color: ${theme.colors.accent.hover};
      text-decoration: underline;
    }
  }
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: ${theme.spacing.lg};
`;

const Label = styled.label`
  display: block;
  color: ${theme.colors.text.primary};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing.sm};
  font-size: ${theme.typography.fontSize.md};
`;

const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.background.secondary};
  border: 1px solid
    ${(props) => (props.hasError ? "#ef4444" : theme.colors.border.default)};
  border-radius: 8px;
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.md};
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.hasError ? "#ef4444" : theme.colors.accent.main};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.hasError ? "rgba(239, 68, 68, 0.1)" : "rgba(79, 70, 229, 0.1)"};
  }

  &::placeholder {
    color: ${theme.colors.text.muted};
  }
`;

const TextArea = styled.textarea<{ hasError?: boolean }>`
  width: 100%;
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.background.secondary};
  border: 1px solid
    ${(props) => (props.hasError ? "#ef4444" : theme.colors.border.default)};
  border-radius: 8px;
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.md};
  transition: all 0.2s ease;
  resize: vertical;
  min-height: 150px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.hasError ? "#ef4444" : theme.colors.accent.main};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.hasError ? "rgba(239, 68, 68, 0.1)" : "rgba(79, 70, 229, 0.1)"};
  }

  &::placeholder {
    color: ${theme.colors.text.muted};
  }
`;

const ErrorMessage = styled.span`
  display: block;
  color: #ef4444;
  font-size: ${theme.typography.fontSize.sm};
  margin-top: ${theme.spacing.xs};
  font-weight: ${theme.typography.fontWeight.medium};
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background-color: ${theme.colors.accent.main};
  color: ${theme.colors.text.primary};
  font-weight: ${theme.typography.fontWeight.semibold};
  font-size: ${theme.typography.fontSize.lg};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background-color: ${theme.colors.accent.hover};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.md};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: ${theme.colors.background.secondary};
  border: 1px solid ${theme.colors.border.default};
  border-radius: 50%;
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.xl};
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: ${theme.colors.accent.main};
    border-color: ${theme.colors.accent.main};
    color: ${theme.colors.text.primary};
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.md};
  }
`;

const StatusMessage = styled.div<{
  type: "success" | "error";
  isVisible: boolean;
}>`
  position: fixed;
  top: ${theme.spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: 8px;
  background-color: ${(props) =>
    props.type === "success" ? theme.colors.accent.main : "#ef4444"};
  color: white;
  text-align: center;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-out;
  z-index: 1000;
  box-shadow: ${theme.shadows.lg};
  max-width: 90%;
  width: auto;
  pointer-events: ${(props) => (props.isVisible ? "auto" : "none")};
`;

export default function ContactPage() {
  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors, isSubmitting: isFormSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur", // Validate on blur (when user leaves field)
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        reset(); // Reset form fields
      } else {
        setStatus({
          type: "error",
          message:
            responseData.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show status message with fade-in effect
  useEffect(() => {
    if (status) {
      // Trigger fade-in
      setIsVisible(true);

      // Start fade-out after 5 seconds
      const fadeOutTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      // Remove message from DOM after fade-out completes
      const removeTimer = setTimeout(() => {
        setStatus(null);
      }, 5500); // 5000ms + 500ms for fade-out animation

      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [status]);

  return (
    <>
      {status && (
        <StatusMessage type={status.type} isVisible={isVisible}>
          {status.message}
        </StatusMessage>
      )}

      <Section center paddingY={theme.spacing.xxxl}>
        <Container>
          <ScrollReveal>
            <PageTitle>Get In Touch</PageTitle>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Subtitle>
              Have a project in mind or just want to chat? I'd love to hear from
              you. Drop me a message and I'll get back to you as soon as
              possible.
            </Subtitle>
          </ScrollReveal>
        </Container>
      </Section>

      <Section bgColor={theme.colors.background.secondary}>
        <Container>
          <Grid cols={1} mdCols={3} gap="2rem">
            <ScrollReveal delay={0.1}>
              <ContactCard>
                <div className="icon">📧</div>
                <h3>Email</h3>
                <p>Send me an email anytime</p>
                <a href="mailto:andrade.william61@gmail.com">
                  andrade.william61@gmail.com
                </a>
              </ContactCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <ContactCard>
                <div className="icon">📱</div>
                <h3>Phone</h3>
                <p>Give me a call</p>
                <a href="tel:+15713385130">+1 (571) 338-5130</a>
              </ContactCard>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <ContactCard>
                <div className="icon">📍</div>
                <h3>Location</h3>
                <p>Based in</p>
                <a href="#">San Francisco, CA</a>
              </ContactCard>
            </ScrollReveal>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container narrow>
          <ContactForm onSubmit={handleFormSubmit(handleSubmit)}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                {...register("name")}
                id="name"
                type="text"
                placeholder="Your name"
                hasError={!!errors.name}
              />
              {errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                {...register("email")}
                id="email"
                type="email"
                placeholder="your.email@example.com"
                hasError={!!errors.email}
              />
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                {...register("subject")}
                id="subject"
                type="text"
                placeholder="What's this about?"
                hasError={!!errors.subject}
              />
              {errors.subject && (
                <ErrorMessage>{errors.subject.message}</ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                {...register("message")}
                id="message"
                placeholder="Tell me about your project or just say hi!"
                hasError={!!errors.message}
              />
              {errors.message && (
                <ErrorMessage>{errors.message.message}</ErrorMessage>
              )}
            </FormGroup>

            <SubmitButton
              type="submit"
              disabled={isSubmitting || isFormSubmitting}
            >
              {isSubmitting || isFormSubmitting ? "Sending..." : "Send Message"}
            </SubmitButton>
          </ContactForm>
        </Container>
      </Section>

      <Section bgColor={theme.colors.background.secondary}>
        <Container narrow>
          <ScrollReveal>
            <div style={{ textAlign: "center" }}>
              <h2
                style={{
                  fontSize: theme.typography.fontSize["3xl"],
                  color: theme.colors.text.primary,
                  marginBottom: theme.spacing.md,
                }}
              >
                Connect With Me
              </h2>
              <p
                style={{
                  fontSize: theme.typography.fontSize.lg,
                  color: theme.colors.text.secondary,
                  marginBottom: theme.spacing.xl,
                }}
              >
                Follow me on social media for updates and insights
              </p>
              <SocialLinks>
                <SocialLink href="https://github.com" aria-label="GitHub">
                  🐙
                </SocialLink>
                <SocialLink href="https://linkedin.com" aria-label="LinkedIn">
                  💼
                </SocialLink>
                <SocialLink href="https://instagram.com" aria-label="Instagram">
                  📷
                </SocialLink>
              </SocialLinks>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
}
