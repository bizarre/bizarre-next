import * as styles from "./repo-list-header.css";
import { RepositoryListSearch } from "./repo-list-search";

export const RepositoryListHeader = ({ query }: { query: string }) => {
  return (
    <header>
      <h1 className={styles.heading}>open source repositories</h1>
      <div>
        <RepositoryListSearch initialQuery={query} />
      </div>
    </header>
  );
};
