"use client";

import type { GithubEvent } from "../page";
import * as styles from "./activity-feed-item.css";
import TerminalIcon from "@/assets/icon/terminal.svg";
import BookmarkPlusIcon from "@/assets/icon/bookmark-plus.svg";
import BranchIcon from "@/assets/icon/branch.svg";
import StarIcon from "@/assets/icon/star.svg";
import Link from "next/link";
import theme from "@/theme";
import config from "@/config";
import { useEffect, useMemo, useState } from "react";

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const ActivityFeedItemBase = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  expanded?: React.ReactNode;
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
    <ActivityFeedItemBase
      icon={<TerminalIcon />}
      expanded={
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
                  {repos[repoName]}{" "}
                  {repos[repoName] === 1 ? "commit" : "commits"}
                </span>
                <div className={styles.extraContentContainer}>
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
      }
    >
      <h1 className={styles.itemHeading}>
        Created {total} commits in {reposNames.length}&nbsp;
        {reposNames.length == 1 ? "repository" : "repositories"}
      </h1>
    </ActivityFeedItemBase>
  );
};

const CreateActivityFeedItem = ({
  activities,
}: {
  activities: GithubEvent[];
}) => {
  const [languageMap, setLanguageMap] = useState({} as Record<string, string>);

  const repos = useMemo(
    () =>
      activities
        .filter((i) => !i.payload.ref && i.payload.ref_type === "repository")
        .map((i) => {
          return {
            name: i.repo.name,
            createdAt: new Date(i.created_at),
            id: i.repo.id,
          };
        }),
    [activities]
  );

  useEffect(() => {
    const getLanguages = async () => {
      const map: Record<string, string> = {};

      for (const repo of repos) {
        const res = await fetch(
          `https://api.github.com/repositories/${repo.id}/languages`,
          {
            headers: {
              Authorization: `Bearer ${GITHUB_TOKEN}`,
            },
          }
        );

        map[repo.name] = Object.keys(await res.json())[0];
      }

      setLanguageMap(map);
    };

    getLanguages();
  }, [repos]);

  return repos ? (
    <ActivityFeedItemBase
      icon={<BookmarkPlusIcon />}
      expanded={
        <div>
          {repos.map(({ name, createdAt }) => {
            return (
              <div key={`${name}-create-activity`} className={styles.commit}>
                <Link
                  className={styles.commitsRepo}
                  href={`/repositories/${name}`}
                >
                  {name}
                </Link>
                <div className={styles.extraContentContainer}>
                  <span>
                    <span></span>
                    {languageMap[name]}
                  </span>
                  <span>
                    {createdAt.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      }
    >
      <h1 className={styles.itemHeading}>
        Created {repos.length}&nbsp;
        {repos.length == 1 ? "repository" : "repositories"}
      </h1>
    </ActivityFeedItemBase>
  ) : (
    <></>
  );
};

const ForkActivityFeedItem = ({
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

  return repos ? (
    <ActivityFeedItemBase
      icon={<BranchIcon />}
      expanded={
        <div>
          {reposNames.map((repoName) => {
            return (
              <div key={`${repoName}-fork-activity`} className={styles.commit}>
                <Link
                  className={styles.commitsRepo}
                  href={`/repositories/${config.github}/${
                    repoName.split("/")[1]
                  }`}
                >
                  {repoName}
                </Link>
              </div>
            );
          })}
        </div>
      }
    >
      <h1 className={styles.itemHeading}>
        Forked {reposNames.length}&nbsp;
        {reposNames.length == 1 ? "repository" : "repositories"}
      </h1>
    </ActivityFeedItemBase>
  ) : (
    <></>
  );
};

const StarActivityFeedItem = ({
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

  return repos ? (
    <ActivityFeedItemBase
      icon={<StarIcon />}
      expanded={
        <div>
          {reposNames.map((repoName) => {
            return (
              <div key={`${repoName}-star-activity`} className={styles.commit}>
                <Link
                  className={styles.commitsRepo}
                  href={`/repositories/${repoName}`}
                >
                  {repoName}
                </Link>
              </div>
            );
          })}
        </div>
      }
    >
      <h1 className={styles.itemHeading}>
        Starred {reposNames.length}&nbsp;
        {reposNames.length == 1 ? "repository" : "repositories"}
      </h1>
    </ActivityFeedItemBase>
  ) : (
    <></>
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
    case "CreateEvent":
      return <CreateActivityFeedItem activities={activities} />;
    case "ForkEvent":
      return <ForkActivityFeedItem activities={activities} />;
    case "WatchEvent":
      return <StarActivityFeedItem activities={activities} />;
    default:
      return <div></div>;
  }
};
