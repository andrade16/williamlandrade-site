"use client";

import styled from "@emotion/styled";
import { theme } from "@/theme";
import Image from "next/image";

interface AvatarContainerProps {
  size?: string;
}

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: string;
  width?: number;
  height?: number;
}

const AvatarContainer = styled.div<AvatarContainerProps>`
  display: inline-block;
  position: relative;
  width: ${(props) => props.size || "150px"};
  height: ${(props) => props.size || "150px"};
  margin-bottom: ${theme.spacing.lg};
`;

const AvatarImage = styled(Image)`
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

export default function Avatar({
  src,
  alt = "Avatar",
  size,
  width,
  height,
}: AvatarProps) {
  return (
    <AvatarContainer size={size}>
      <AvatarImage
        src={src || "https://via.placeholder.com/150/8b5cf6/ffffff?text=WA"}
        alt={alt}
        width={width}
        height={height}
      />
    </AvatarContainer>
  );
}
