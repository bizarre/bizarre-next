import classNames from "classnames";
import * as styles from "./page.css";
import cs from "classnames";
import { RepositoryListHeader } from "./repo-list-header/repo-list-header";
import { RepositoryList, RepositoryListSkeleton } from "./repo-list/repo-list";
import { Suspense } from "react";
import config from "@/config";

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
const GITHUB_PAGE_SIZE = 100;

type Repo = {
  full_name: string;
  owner: { login: string };
  name: string;
};

type Language = string | null;

const fetchAllGithubRepositories = async (
  query: string,
  owner: string,
  page: number = 1,
  counter: number = 0
): Promise<{
  repos: Repo[];
  languages: Language[];
}> => {
  const repos = [];

  const response = await fetch(
    `https://api.github.com/search/repositories?q=${query}+user:${owner}&per_page=${GITHUB_PAGE_SIZE}&page=${page}&sort=updated`,
    {
      headers: { Authorization: `Bearer ${GITHUB_TOKEN}` },
      // infinite cache so that we don't re-fetch
      next: { revalidate: Infinity },
    }
  );
  const data = await response.json();

  repos.push(...data.items);

  if (repos.length + counter < data.total_count) {
    const nextPage = await fetchAllGithubRepositories(
      query,
      owner,
      page + 1,
      counter + repos.length
    );

    repos.push(...nextPage.repos);
  }

  // build language list from repos (just removes dupes)
  const languages = repos
    .map((r) => r.language)
    .reduce((acc, i) => {
      if (!acc.includes(i)) {
        acc.push(i);
      }

      return acc;
    }, []);

  return { repos, languages };
};

export default async function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const query = searchParams?.q?.toString() || "";
  const { repos, languages } = await fetchAllGithubRepositories(
    query,
    config.github
  );

  return (
    <section className={styles.page}>
      <RepositoryListHeader query={query} languages={languages} />
      {/* @ts-expect-error Server Component */}
      <RepositoryList repos={repos} />
    </section>
  );
}
