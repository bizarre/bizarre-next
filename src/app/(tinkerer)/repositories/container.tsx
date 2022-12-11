import classNames from "classnames";
import * as styles from "./page.css";
import cs from "classnames";
import { RepositoryListHeader } from "./repo-list-header/repo-list-header";
import { RepositoryList, PER_PAGE } from "./repo-list/repo-list";
import { Suspense } from "react";
import config from "@/config";
import { cache } from "react";
import {
  fetchAllGithubRepositories,
  getFilteredGitHubReposAndLanguages,
} from "@/util/github";
import { randomUUID } from "crypto";
import { Notifier } from "./notifier";
import { redirect } from "next/navigation";
import { getChainedURLSearchParams } from "@/util/util";
import { startTransition } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] };
}) {
  const query = searchParams?.q?.toString()?.toLowerCase() || "";
  const selectedLanguages = [...new Set([searchParams?.l || []].flat())];
  const page = parseInt(searchParams?.page?.toString() || "1");

  let [repos, languages] = getFilteredGitHubReposAndLanguages(
    await fetchAllGithubRepositories(config.github),
    query
  );

  repos = repos.filter((repo) => {
    return (
      selectedLanguages.length === 0 ||
      selectedLanguages.includes(repo.language)
    );
  });

  const totalPages = Math.ceil(repos.length / PER_PAGE);

  return (
    <Notifier languages={languages} pageCount={totalPages}>
      {/* @ts-expect-error Server Component */}
      <RepositoryList repos={repos} page={page} searchParams={searchParams} />
    </Notifier>
  );
}
