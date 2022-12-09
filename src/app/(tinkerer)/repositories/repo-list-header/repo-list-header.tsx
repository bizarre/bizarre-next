import * as styles from "./repo-list-header.css";
import { RepositoryListLanguageFilter } from "./repo-list-language-filter";
import { RepositoryListSearch } from "./repo-list-search";

export const RepositoryListHeader = ({
  query,
  languages,
}: {
  query: string;
  languages: (string | null)[];
}) => {
  return (
    <header>
      <h1 className={styles.heading}>open source repositories</h1>
      <div className={styles.toolbar}>
        <RepositoryListSearch initialQuery={query} />
        <RepositoryListLanguageFilter languages={languages} />
      </div>
    </header>
  );
};
