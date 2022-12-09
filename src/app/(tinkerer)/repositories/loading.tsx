import * as styles from "./page.css";
import { RepositoryListHeader } from "./repo-list-header/repo-list-header";
import { RepositoryListSkeleton } from "./repo-list/repo-list";

export default async function Loading({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const query = searchParams?.q?.toString() || "";

  return (
    <section className={styles.page}>
      <RepositoryListHeader query={query} languages={[]} />
      <RepositoryListSkeleton />
    </section>
  );
}
