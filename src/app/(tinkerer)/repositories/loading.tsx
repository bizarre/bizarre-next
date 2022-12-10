import * as styles from "./page.css";
import { RepositoryListHeader } from "./repo-list-header/repo-list-header";
import { RepositoryListSkeleton } from "./repo-list/repo-list";

export default async function Loading({}) {
  return (
    <section className={styles.page}>
      <RepositoryListHeader query={""} languages={[]} selectedLanguages={[]} />
      <RepositoryListSkeleton />
    </section>
  );
}
