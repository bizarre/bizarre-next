import * as styles from "./page.css";
import { RepositoryListHeader } from "./repo-list-header/repo-list-header";
import { RepositoryListSkeleton } from "./repo-list/repo-list";

export default async function Loading({}) {
  return (
    <section className={styles.page}>
      {/* @ts-expect-error Server Component */}
      <RepositoryListHeader query={""} selectedLanguages={[]} />
      <RepositoryListSkeleton />
    </section>
  );
}
