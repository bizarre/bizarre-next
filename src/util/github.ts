import { cache } from "react";
import "server-only";

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
const GITHUB_PAGE_SIZE = 100;

type Repo = {
  full_name: string;
  owner: { login: string };
  name: string;
  language: string;
  description: string;
  topics: string[];
  fork: boolean;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  pushed_at: string;
  created_at: string;
};

export const fetchAllGithubRepositories = cache(
  async (owner: string, page: number = 1): Promise<Repo[]> => {
    const repos = [];

    const response = await fetch(
      `https://api.github.com/users/${owner}/repos?per_page=${GITHUB_PAGE_SIZE}&page=${page}&sort=updated`,
      {
        headers: { Authorization: `Bearer ${GITHUB_TOKEN}` },
        cache: "force-cache",
        // infinite cache so that we don't re-fetch
        next: { revalidate: Infinity },
      }
    );

    const data = await response.json();

    repos.push(...(data || []));

    if (repos.length === GITHUB_PAGE_SIZE) {
      const nextPage = await fetchAllGithubRepositories(owner, page + 1);

      repos.push(...nextPage);
    }

    return repos.filter((r) => !r.fork);
  }
);

export const getFilteredGitHubReposAndLanguages = (
  repos: Repo[],
  query: string
): [Repo[], string[]] => {
  repos = repos.filter((repo) => {
    return (
      !query ||
      (repo.name?.toLowerCase() || "").includes(query) ||
      (repo.full_name.toLowerCase() || "").includes(query) ||
      (repo.description?.toLowerCase() || "").includes(query) ||
      (repo.topics?.join(" ")?.toLowerCase() || "").includes(query) ||
      (repo.language?.toLowerCase() || "").includes(query)
    );
  });

  const languages = repos
    .map((r) => r.language)
    .reduce((acc: string[], i: string) => {
      if (!acc.includes(i) && i) {
        acc.push(i);
      }

      return acc;
    }, []);

  return [repos, languages];
};
