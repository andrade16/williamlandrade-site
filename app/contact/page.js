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

const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.background.secondary};
  border: 1px solid ${theme.colors.border.default};
  border-radius: 8px;
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.md};
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${theme.colors.accent.main};
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
  }

  &::placeholder {
    color: ${theme.colors.text.muted};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.background.secondary};
  border: 1px solid ${theme.colors.border.default};
  border-radius: 8px;
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.md};
  transition: all 0.2s ease;
  resize: vertical;
  min-height: 150px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${theme.colors.accent.main};
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
  }

  &::placeholder {
    color: ${theme.colors.text.muted};
  }
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

  &:hover {
    background-color: ${theme.colors.accent.hover};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.md};
  }

  &:active {
    transform: translateY(0);
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

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <>
      <Section center paddingY={theme.spacing.xxxl}>
        <Container>
          <PageTitle>Get In Touch</PageTitle>
          <Subtitle>
            Have a project in mind or just want to chat? I'd love to hear from
            you. Drop me a message and I'll get back to you as soon as possible.
          </Subtitle>
        </Container>
      </Section>

      <Section bgColor={theme.colors.background.secondary}>
        <Container>
          <Grid cols={1} mdCols={3} gap="2rem">
            <ContactCard>
              <div className="icon">📧</div>
              <h3>Email</h3>
              <p>Send me an email anytime</p>
              <a href="mailto:hello@williamandrade.com">
                hello@williamandrade.com
              </a>
            </ContactCard>

            <ContactCard>
              <div className="icon">📱</div>
              <h3>Phone</h3>
              <p>Give me a call</p>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </ContactCard>

            <ContactCard>
              <div className="icon">📍</div>
              <h3>Location</h3>
              <p>Based in</p>
              <a href="#">San Francisco, CA</a>
            </ContactCard>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container narrow>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="What's this about?"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Tell me about your project or just say hi!"
                required
              />
            </FormGroup>

            <SubmitButton type="submit">Send Message</SubmitButton>
          </ContactForm>
        </Container>
      </Section>

      <Section bgColor={theme.colors.background.secondary}>
        <Container narrow>
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
              <SocialLink href="https://twitter.com" aria-label="Twitter">
                🐦
              </SocialLink>
              <SocialLink href="https://instagram.com" aria-label="Instagram">
                📷
              </SocialLink>
            </SocialLinks>
          </div>
        </Container>
      </Section>
    </>
  );
}
