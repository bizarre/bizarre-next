import * as styles from "./repo-header.css";
import { Repo } from "@/util/github";
import languageColors from "@/util/language-colors";
import StarIcon from "@/assets/icon/star.svg";
import BranchIcon from "@/assets/icon/branch.svg";
import { RepositoryHeaderDropdown } from "./repo-header-dropdown";

export const RepositoryHeader = ({ repo }: { repo: Repo }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <h1 className={styles.title}>
          {repo.owner.login}/
          <span className={styles.titleRepo}>{repo.name}</span>
        </h1>
        <RepositoryHeaderDropdown repo={repo} />
      </div>
      <ul className={styles.stats}>
        <li className={styles.stat}>
          <span
            className={styles.languageBlob}
            style={{ background: languageColors[repo.language] || "black" }}
          ></span>
          {repo.language}
        </li>
        <li className={styles.stat}>
          <StarIcon className={styles.icon} />
          {repo.stargazers_count}
        </li>
        <li className={styles.stat}>
          <BranchIcon className={styles.icon} />
          {repo.forks_count}
        </li>
      </ul>
      <p className={styles.description}>{repo.description}</p>
    </header>
  );
};
