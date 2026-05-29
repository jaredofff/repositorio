export type GitHubRepository = {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  html_url: string;
  homepage: string | null;
  fork: boolean;
  archived: boolean;
};

export type GitHubFeaturedRepo = {
  name: string;
  description: string;
  language: string;
  stars: number;
  updatedAt: string;
  githubUrl: string;
  homepage?: string;
};

export type GitHubProfileSummary = {
  username: string;
  profileUrl: string;
  repositories: GitHubFeaturedRepo[];
  totalRepositories: number;
  primaryLanguages: string[];
  latestUpdateLabel: string;
};

const DEFAULT_USERNAME = "jaredofff";

function formatRelativeDate(dateValue: string) {
  const date = new Date(dateValue);
  const formatter = new Intl.DateTimeFormat("es", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return formatter.format(date);
}

function toFeaturedRepository(repository: GitHubRepository): GitHubFeaturedRepo {
  return {
    name: repository.name,
    description:
      repository.description?.trim() || "Repositorio real del perfil de GitHub.",
    language: repository.language ?? "Unknown",
    stars: repository.stargazers_count,
    updatedAt: formatRelativeDate(repository.updated_at),
    githubUrl: repository.html_url,
    homepage: repository.homepage ?? undefined,
  };
}

export async function getGitHubProfileSummary(username = DEFAULT_USERNAME): Promise<GitHubProfileSummary> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated&direction=desc`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "OnzeStudioPortfolio",
        },
        next: {
          revalidate: 60 * 30,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`GitHub API request failed with status ${response.status}`);
    }

    const repositories = (await response.json()) as GitHubRepository[];
    const featuredRepositories = repositories
      .filter((repository) => !repository.fork && !repository.archived)
      .sort((first, second) => second.stargazers_count - first.stargazers_count)
      .slice(0, 6)
      .map(toFeaturedRepository);

    const topLanguages = Array.from(
      new Set(
        featuredRepositories
          .map((repository) => repository.language)
          .filter((language): language is string => Boolean(language) && language !== "Unknown"),
      ),
    ).slice(0, 5);

    const latestUpdate = featuredRepositories[0]?.updatedAt ?? "Recientemente";

    return {
      username,
      profileUrl: `https://github.com/${username}?tab=repositories`,
      repositories: featuredRepositories,
      totalRepositories: repositories.length,
      primaryLanguages: topLanguages,
      latestUpdateLabel: latestUpdate,
    };
  } catch {
    return {
      username,
      profileUrl: `https://github.com/${username}?tab=repositories`,
      repositories: [],
      totalRepositories: 0,
      primaryLanguages: [],
      latestUpdateLabel: "No disponible",
    };
  }
}
