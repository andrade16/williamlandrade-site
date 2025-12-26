"use client";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/theme";
import { ContributionData } from "@/lib/types";
import { formatDate } from "@/lib/utils";

const GraphContainer = styled.div`
  background-color: ${theme.colors.background.secondary};
  border: 1px solid ${theme.colors.border.default};
  border-radius: 12px;
  padding: ${theme.spacing.xl};
  max-width: 900px;
  margin: 0 auto ${theme.spacing.xxxl};
  overflow: hidden;
`;

const GraphHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.lg};
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
`;

const Title = styled.h3`
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.xl};
  margin: 0;
`;

const TotalContributions = styled.div`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};

  span {
    color: ${theme.colors.accent.main};
    font-weight: ${theme.typography.fontWeight.semibold};
  }
`;

const GraphWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
`;

const Graph = styled.div`
  display: inline-flex;
  gap: 3px;
  min-width: min-content;
`;

const Week = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Day = styled.div<{ level: number; hasContributions: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background-color: ${(props) => {
    if (!props.hasContributions) return theme.colors.border.default;
    // GitHub-style green gradient
    const levels = [
      "rgba(79, 70, 229, 0.2)", // Very light purple
      "rgba(79, 70, 229, 0.4)",
      "rgba(79, 70, 229, 0.6)",
      "rgba(79, 70, 229, 0.8)",
      theme.colors.accent.main, // Full purple
    ];
    return levels[Math.min(props.level, 4)];
  }};
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.3);
    box-shadow: ${theme.shadows.md};
    z-index: 10;
  }

  &:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${theme.colors.background.primary};
    border: 1px solid ${theme.colors.border.default};
    color: ${theme.colors.text.primary};
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    border-radius: 4px;
    white-space: nowrap;
    font-size: ${theme.typography.fontSize.xs};
    margin-bottom: 4px;
    z-index: 20;
    box-shadow: ${theme.shadows.md};
  }
`;

const Legend = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  margin-top: ${theme.spacing.lg};
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.text.muted};
`;

const LegendItem = styled.div<{ level: number }>`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background-color: ${(props) => {
    const levels = [
      theme.colors.border.default,
      "rgba(79, 70, 229, 0.2)",
      "rgba(79, 70, 229, 0.4)",
      "rgba(79, 70, 229, 0.6)",
      theme.colors.accent.main,
    ];
    return levels[props.level];
  }};
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

const getContributionLevel = (count: number): number => {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
};

export function GitHubContributionGraph() {
  const [data, setData] = useState<ContributionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/github/contributions")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((contributionData) => {
        setData(contributionData);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingState>Loading contribution graph...</LoadingState>;
  }

  if (error || !data) {
    return (
      <ErrorState>
        Unable to load contribution graph. Make sure GITHUB_TOKEN is set in
        your environment variables.
      </ErrorState>
    );
  }

  return (
    <GraphContainer>
      <GraphHeader>
        <Title>GitHub Contributions</Title>
        <TotalContributions>
          <span>{data.totalContributions}</span> contributions in the last year
        </TotalContributions>
      </GraphHeader>

      <GraphWrapper>
        <Graph>
          {data.weeks.map((week, weekIndex) => (
            <Week key={weekIndex}>
              {week.contributionDays.map((day, dayIndex) => (
                <Day
                  key={dayIndex}
                  level={getContributionLevel(day.contributionCount)}
                  hasContributions={day.contributionCount > 0}
                  data-tooltip={`${day.contributionCount} contributions on ${formatDate(day.date)}`}
                  title={`${day.contributionCount} contributions on ${formatDate(day.date)}`}
                />
              ))}
            </Week>
          ))}
        </Graph>
      </GraphWrapper>

      <Legend>
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <LegendItem key={level} level={level} />
        ))}
        <span>More</span>
      </Legend>
    </GraphContainer>
  );
}
