import * as styles from "./page.css";
import { RepositoryListHeader } from "./repo-list-header/repo-list-header";
import { RepositoryListSkeleton } from "./repo-list/repo-list";
import { Suspense } from "react";
import Repositories from "./container";
import { RepositoryContextWrapper } from "./context";
import { RepositoryListPaginator } from "./repo-list/repo-list-paginator";

export default function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] };
}) {
  const query = searchParams?.q?.toString()?.toLowerCase() || "";
  const selectedLanguages = [...new Set([searchParams?.l || []].flat())];
  const page = parseInt(searchParams?.page?.toString() || "1");

  return (
    <section className={styles.page}>
      <RepositoryContextWrapper>
        {/* @ts-expect-error Server Component */}
        <RepositoryListHeader
          query={query}
          selectedLanguages={selectedLanguages}
        />
        <Suspense
          key={JSON.stringify(searchParams)}
          fallback={<RepositoryListSkeleton />}
        >
          {/* @ts-expect-error Server Component */}
          <Repositories searchParams={searchParams} />
        </Suspense>
        <RepositoryListPaginator page={page} searchParams={searchParams} />
      </RepositoryContextWrapper>
    </section>
  );
}
