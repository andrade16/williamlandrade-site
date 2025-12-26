export interface GitHubEvent {
  id: string;
  type: string;
  repo: {
    name: string;
    url: string;
  };
  created_at: string;
  payload: {
    ref?: string;
    ref_type?: string;
    action?: string;
    pull_request?: {
      title: string;
      number: number;
    };
    issue?: {
      title: string;
      number: number;
    };
    commits?: Array<{ message: string }>;
  };
}

export interface ContributionDay {
  contributionCount: number;
  date: string;
  color: string;
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface ContributionData {
  totalContributions: number;
  weeks: ContributionWeek[];
}
