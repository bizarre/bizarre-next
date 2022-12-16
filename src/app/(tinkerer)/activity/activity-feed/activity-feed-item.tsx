import type { GithubEvent } from "../page";
import * as styles from "./activity-feed-item.css";
import TerminalIcon from "@/assets/icon/terminal.svg";
import Link from "next/link";
import theme from "@/theme";

const ActivityFeedItemBase = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className={styles.item}>
      <span className={styles.itemIcon}>{icon}</span>
      <div className={styles.itemContent}> {children}</div>
    </div>
  );
};

const CommitActivityFeedItem = ({
  activities,
}: {
  activities: GithubEvent[];
}) => {
  const [repos, total] = activities.reduce(
    (acc: any, v) => {
      acc[0][v.repo.name] = (acc[0][v.repo.name] || 0) + 1;
      acc[1]++;

      return acc;
    },
    [{}, 0]
  );

  const reposNames = Object.keys(repos).sort((a, b) => {
    return repos[b] - repos[a];
  });

  return (
    <ActivityFeedItemBase icon={<TerminalIcon />}>
      <h1 className={styles.itemHeading}>
        Created {total} commits in {reposNames.length}&nbsp;
        {reposNames.length == 1 ? "repository" : "repositories"}
      </h1>
      <div>
        {reposNames.map((repoName) => {
          return (
            <div key={`${repoName}`} className={styles.commit}>
              <Link
                className={styles.commitsRepo}
                href={`/repositories/${repoName}`}
              >
                {repoName}
              </Link>
              <span className={styles.commitsSpan}>
                {repos[repoName]} commits
              </span>
              <div className={styles.commitsBarContainer}>
                <div
                  className={styles.commitsBar}
                  style={{
                    width: `${(100.0 / total) * repos[repoName]}%`,
                    background:
                      theme.vars.color.github_contributions[
                        Math.ceil(
                          (4.0 / total) * repos[repoName]
                        ) as keyof typeof theme.vars.color.github_contributions
                      ],
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </ActivityFeedItemBase>
  );
};

export const ActivityFeedItem = ({
  type,
  activities,
}: {
  type: string;
  activities: GithubEvent[];
}) => {
  switch (type) {
    case "PushEvent":
      return <CommitActivityFeedItem activities={activities} />;
    default:
      return <div></div>;
  }
};
