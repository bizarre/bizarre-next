import classNames from "classnames";
import * as styles from "./page.css";
import cs from "classnames";
import { RepositoryListHeader } from "./repo-list-header/repo-list-header";
import { RepositoryList, RepositoryListSkeleton } from "./repo-list/repo-list";
import { Suspense } from "react";
import config from "@/config";
import { cache } from "react";

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
};

const fetchAllGithubRepositories = cache(
  async (query: string, owner: string, page: number = 1): Promise<Repo[]> => {
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
      const nextPage = await fetchAllGithubRepositories(query, owner, page + 1);

      repos.push(...nextPage);
    }

    return repos.filter((r) => !r.fork);
  }
);

export default async function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const query = searchParams?.q?.toString()?.toLowerCase() || "";
  const selectedLanguages = [...new Set([searchParams?.l || []].flat())];
  let repos = await fetchAllGithubRepositories(query, config.github);

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

  repos = repos.filter((repo) => {
    return (
      selectedLanguages.length === 0 ||
      selectedLanguages.includes(repo.language)
    );
  });

  return (
    <section className={styles.page}>
      <RepositoryListHeader
        query={query}
        languages={languages}
        selectedLanguages={selectedLanguages}
      />
      {/* @ts-expect-error Server Component */}
      <RepositoryList repos={repos} />
    </section>
  );
}

export const revalidate = Infinity;
