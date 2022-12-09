import classNames from "classnames";
import * as styles from "./page.css";
import cs from "classnames";
import { RepositoryListHeader } from "./repo-list-header/repo-list-header";
import { RepositoryList, RepositoryListSkeleton } from "./repo-list/repo-list";
import { Suspense } from "react";

export default function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const query = searchParams?.q?.toString() || "";

  return (
    <section className={styles.page}>
      <RepositoryListHeader query={query} />
      <Suspense fallback={<RepositoryListSkeleton />}>
        {/* @ts-expect-error Server Component */}
        <RepositoryList query={query} />
      </Suspense>
    </section>
  );
}
