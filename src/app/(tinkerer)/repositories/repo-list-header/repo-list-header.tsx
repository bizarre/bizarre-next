import * as styles from "./repo-list-header.css";
import { RepositoryListLanguageFilter } from "./repo-list-language-filter";
import { RepositoryListSearch } from "./repo-list-search";
import { RepositoryListSort } from "./repo-list-sort";

export const RepositoryListHeader = async ({
  query,
  selectedLanguages,
}: {
  query: string;
  selectedLanguages: string[];
}) => {
  let _ = [styles.icon, styles.container, styles.input];
  return (
    <header>
      <h1 className={styles.heading}>open source repositories</h1>
      <div className={styles.toolbar}>
        <RepositoryListSearch initialQuery={query} />
        <RepositoryListLanguageFilter selectedLanguages={selectedLanguages} />
        <RepositoryListSort />
      </div>
    </header>
  );
};
