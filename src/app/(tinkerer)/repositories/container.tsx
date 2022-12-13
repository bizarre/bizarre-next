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
  const sort = searchParams?.sort?.toString();
  const sortOrder = searchParams?.order?.toString() || "desc";

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

  if (sort) {
    switch (sort) {
      case "stars":
        repos = repos.sort((a, b) => {
          return (
            (b.stargazers_count - a.stargazers_count) *
            (sortOrder === "asc" ? -1 : 1)
          );
        });
        break;
      case "forks":
        repos = repos.sort((a, b) => {
          return (
            (b.forks_count - a.forks_count) * (sortOrder === "asc" ? -1 : 1)
          );
        });
        break;
      case "updated":
        repos = repos.sort((a, b) => {
          return (
            (new Date(b.updated_at).getTime() +
              new Date(b.pushed_at).getTime() -
              new Date(a.updated_at).getTime() +
              new Date(a.pushed_at).getTime()) *
            (sortOrder === "asc" ? -1 : 1)
          );
        });
        break;
      case "created":
        repos = repos.sort((a, b) => {
          return (
            (new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()) *
            (sortOrder === "asc" ? -1 : 1)
          );
        });
    }
  }

  const totalPages = Math.ceil(repos.length / PER_PAGE);

  return (
    <Notifier languages={languages} pageCount={totalPages}>
      {/* @ts-expect-error Server Component */}
      <RepositoryList repos={repos} page={page} searchParams={searchParams} />
    </Notifier>
  );
}
