"use client";

import styled from "@emotion/styled";
import { theme } from "@/theme";

interface AvatarContainerProps {
  size?: string;
}

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: string;
}

const AvatarContainer = styled.div<AvatarContainerProps>`
  display: inline-block;
  position: relative;
  width: ${(props) => props.size || "150px"};
  height: ${(props) => props.size || "150px"};
  margin-bottom: ${theme.spacing.lg};
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${theme.colors.accent.main};
  box-shadow: ${theme.shadows.glow};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${theme.shadows.xl}, ${theme.shadows.glow};
    border-color: ${theme.colors.accent.light};
  }
`;

export default function Avatar({ src, alt = "Avatar", size }: AvatarProps) {
  return (
    <AvatarContainer size={size}>
      <AvatarImage
        src={src || "https://via.placeholder.com/150/8b5cf6/ffffff?text=WA"}
        alt={alt}
      />
    </AvatarContainer>
  );
}
