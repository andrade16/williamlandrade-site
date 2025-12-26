"use client";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { theme } from "@/theme";
import { GitHubEvent } from "@/lib/types";
import { getRelativeTime } from "@/lib/utils";

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

const ActivityItem = styled.a`
  display: block;
  padding: ${theme.spacing.lg};
  background-color: ${theme.colors.background.secondary};
  border: 1px solid ${theme.colors.border.default};
  border-radius: 8px;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    border-color: ${theme.colors.accent.main};
    transform: translateX(4px);
    box-shadow: ${theme.shadows.md};
  }
`;

const ActivityHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.sm};
`;

const ActivityIcon = styled.span`
  font-size: ${theme.typography.fontSize.xl};
  min-width: 24px;
  text-align: center;
`;

const ActivityContent = styled.div`
  flex: 1;
`;

const ActivityType = styled.div`
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xs};
`;

const RepoName = styled.div`
  color: ${theme.colors.accent.main};
  font-size: ${theme.typography.fontSize.sm};
  margin-bottom: ${theme.spacing.xs};
`;

const ActivityDescription = styled.div`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.relaxed};
`;

const Timestamp = styled.div`
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.xs};
  margin-top: ${theme.spacing.xs};
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

const EmptyState = styled.div`
  text-align: center;
  padding: ${theme.spacing.xl};
  color: ${theme.colors.text.secondary};
`;

const getEventIcon = (type: string) => {
  const icons: Record<string, string> = {
    PushEvent: "📝",
    CreateEvent: "✨",
    PullRequestEvent: "🔀",
    IssuesEvent: "🐛",
    WatchEvent: "⭐",
    ForkEvent: "🍴",
    PublicEvent: "🌐",
    DeleteEvent: "🗑️",
  };
  return icons[type] || "📌";
};

const getEventDescription = (event: GitHubEvent) => {
  switch (event.type) {
    case "PushEvent":
      const commitCount = event.payload.commits?.length || 0;
      const firstCommit = event.payload.commits?.[0]?.message || "";
      return `Pushed ${commitCount} commit${commitCount !== 1 ? "s" : ""}${firstCommit ? `: ${firstCommit}` : ""}`;
    case "CreateEvent":
      return `Created ${event.payload.ref_type} ${event.payload.ref || ""}`;
    case "PullRequestEvent":
      return `${event.payload.action} pull request: ${event.payload.pull_request?.title}`;
    case "IssuesEvent":
      return `${event.payload.action} issue: ${event.payload.issue?.title}`;
    case "WatchEvent":
      return "Starred this repository";
    case "ForkEvent":
      return "Forked this repository";
    case "PublicEvent":
      return "Made repository public";
    case "DeleteEvent":
      return `Deleted ${event.payload.ref_type} ${event.payload.ref || ""}`;
    default:
      return event.type.replace("Event", "");
  }
};

export function GitHubFeed() {
  const [activity, setActivity] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        console.log("DATA: ", data);
        setActivity(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingState>Loading GitHub activity...</LoadingState>;
  }

  if (error) {
    return (
      <ErrorState>
        Unable to load GitHub activity. Please try again later.
      </ErrorState>
    );
  }

  if (activity.length === 0) {
    return <EmptyState>No recent activity found.</EmptyState>;
  }

  return (
    <FeedContainer>
      {activity.map((event) => (
        <ActivityItem
          key={event.id}
          href={event.repo.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ActivityHeader>
            <ActivityIcon>{getEventIcon(event.type)}</ActivityIcon>
            <ActivityContent>
              <ActivityType>{event.type.replace("Event", "")}</ActivityType>
              <RepoName>{event.repo.name}</RepoName>
              <ActivityDescription>
                {getEventDescription(event)}
              </ActivityDescription>
              <Timestamp>{getRelativeTime(event.created_at)}</Timestamp>
            </ActivityContent>
          </ActivityHeader>
        </ActivityItem>
      ))}
    </FeedContainer>
  );
}
