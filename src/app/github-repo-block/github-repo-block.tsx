import * as styles from "./github-repo-block.css";
import BookmarkIcon from "@/assets/icon/bookmark.svg";
import StarIcon from "@/assets/icon/star.svg";
import BranchIcon from "@/assets/icon/branch.svg";
import languageColors from "@/util/language-colors";
import { Skeleton } from "@/util/skeleton";
import cs from "classnames";
import theme from "@/theme";

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const getGithubRepository = async (
  owner: string,
  repository: string,
  loadedRepository: any
) => {
  if (loadedRepository) {
    return loadedRepository;
  }

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repository}`,
    { headers: { Authorization: `Bearer ${GITHUB_TOKEN}` } }
  );

  const data = await response.json();
  return data;
};

export const GithubRepoBlock = async ({
  owner,
  repository,
  loadedRepository,
}: {
  owner: string;
  repository: string;
  loadedRepository?: any;
}) => {
  const repo = await getGithubRepository(owner, repository, loadedRepository);

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.title}>
          <BookmarkIcon />
          &nbsp;
          <label>
            {owner}/<span className={styles.headerRepo}>{repository}</span>
          </label>
        </div>
        <ul className={styles.topics}>
          {repo.topics.map((topic: string) => {
            return (
              <li className={styles.topic} key={topic}>
                {topic}
              </li>
            );
          })}
        </ul>
      </header>
      <summary className={styles.description}>
        <p>{repo.description}</p>
      </summary>
      <footer className={styles.footer}>
        <div className={styles.language.container}>
          <span
            className={styles.language.blob}
            style={{ background: languageColors[repo.language] || "black" }}
          ></span>
          <span>{repo.language}</span>
        </div>
        <ul className={styles.stats}>
          <li>
            <StarIcon />
            <span>{repo.stargazers_count}</span>
          </li>
          <li>
            <BranchIcon />
            <span>{repo.forks}</span>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export const GithubRepoBlockSkeleton = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.title}>
          <Skeleton height={theme.vars.text.size.md} width="150px"></Skeleton>
        </div>
        <ul className={styles.topics}>
          {[...new Array(2)].map((i) => {
            return (
              <Skeleton
                key={`${i}-topic`}
                height="20px"
                width="50px"
                borderRadius="1em"
                marginLeft={theme.vars.spacing.sm}
              ></Skeleton>
            );
          })}
        </ul>
      </header>
      <summary className={styles.description}>
        <Skeleton height="14px" width="350px"></Skeleton>
      </summary>
      <footer className={styles.footer}>
        <div className={styles.language.container}>
          <span className={cs(styles.language.blob, theme.skeleton)}></span>
          <Skeleton height="12px" width="50px"></Skeleton>
        </div>
        <ul className={styles.stats}>
          <li>
            <Skeleton height="14px" width="30px"></Skeleton>
          </li>
          <li>
            <Skeleton height="14px" width="30px"></Skeleton>
          </li>
        </ul>
      </footer>
    </div>
  );
};
