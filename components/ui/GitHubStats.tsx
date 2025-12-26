"use client";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/theme";

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${theme.spacing.lg};
  max-width: 900px;
  margin: 0 auto;
`;

const StatCard = styled.div`
  text-align: center;
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.background.secondary};
  border: 1px solid ${theme.colors.border.default};
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${theme.colors.accent.main};
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const StatNumber = styled.div`
  font-size: ${theme.typography.fontSize["4xl"]};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.accent.main};
  line-height: 1;
  margin-bottom: ${theme.spacing.sm};
`;

const StatLabel = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const LoadingState = styled.div`
  text-align: center;
  padding: ${theme.spacing.xl};
  color: ${theme.colors.text.secondary};
`;

const ErrorState = styled.div`
  text-align: center;
  padding: ${theme.spacing.xl};
  color: ${theme.colors.text.secondary};
  background-color: ${theme.colors.background.secondary};
  border: 1px solid ${theme.colors.border.default};
  border-radius: 8px;
`;

interface GitHubStatsData {
  repositories: {
    totalCount: number;
  };
  followers: {
    totalCount: number;
  };
  gists: {
    totalCount: number;
  };
  totalStars: number;
  totalForks: number;
  contributionsCollection: {
    contributionCalendar: {
      totalContributions: number;
    };
    totalCommitContributions: number;
    totalIssueContributions: number;
    totalPullRequestContributions: number;
    totalPullRequestReviewContributions: number;
  };
}

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubStatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/github/stats")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        console.log("STATS DATA ===> ", data);
        setStats(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingState>Loading GitHub stats...</LoadingState>;
  }

  if (error || !stats) {
    return (
      <ErrorState>
        Unable to load GitHub stats. Please try again later.
      </ErrorState>
    );
  }

  console.log("STATS ==> ", stats);

  return (
    <StatsContainer>
      <StatCard>
        <StatNumber>{stats.repositories.totalCount}</StatNumber>
        <StatLabel>Public Repos</StatLabel>
      </StatCard>
      <StatCard>
        <StatNumber>{stats.totalStars}</StatNumber>
        <StatLabel>Total Stars</StatLabel>
      </StatCard>
      <StatCard>
        <StatNumber>
          {stats.contributionsCollection.totalCommitContributions}
        </StatNumber>
        <StatLabel>Total Commits</StatLabel>
      </StatCard>
      <StatCard>
        <StatNumber>
          {stats.contributionsCollection.totalPullRequestContributions}
        </StatNumber>
        <StatLabel>Total PRs</StatLabel>
      </StatCard>
      <StatCard>
        <StatNumber>
          {stats.contributionsCollection.totalIssueContributions}
        </StatNumber>
        <StatLabel>Total Issues</StatLabel>
      </StatCard>
      <StatCard>
        <StatNumber>{stats.followers.totalCount}</StatNumber>
        <StatLabel>Followers</StatLabel>
      </StatCard>
    </StatsContainer>
  );
}
