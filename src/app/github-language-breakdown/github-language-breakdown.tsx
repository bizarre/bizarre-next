import * as styles from "./github-language-breakdown.css";
import languageColors from "@/util/language-colors";
import { _app_defs } from "@/config";

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const fetchGithubLanguageBreakdown = async (
  username: string,
  fetchCount: number
) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=${fetchCount}&sort=created`,
    { headers: { Authorization: `Bearer ${GITHUB_TOKEN}` } }
  );
  const repos = await response.json();

  const languages: { [key: string]: number } = {};
  await Promise.all(
    repos?.map(async (repo: any) => {
      if (repo.fork) return;

      const response = await fetch(repo.languages_url, {
        headers: { Authorization: `Bearer ${GITHUB_TOKEN}` },
      });

      const repoLanguages = await response.json();
      
      Object.entries(repoLanguages).forEach(([language, bytes]) => {
        if (
          _app_defs.language_filter.includes(language) ||
          _app_defs.language_filter.length === 0
        ) {
          languages[language] = (languages[language] || 0) + (bytes as number);
        }
      });
    })
  );

  const total = Object.entries(languages).reduce(
    (acc, [, count]) => acc + count,
    0
  );

  return Object.entries(languages)
    .reduce((acc, [language, count]) => {
      acc.push({
        language: language,
        percentage: Math.round((100.0 / total) * count * 10) / 10,
      });
      return acc;
    }, [] as { language: string; percentage: number }[])
    .sort((a, b) => b.percentage - a.percentage);
};

export const GithubLanguageBreakdown = async ({
  username,
  fetchCount = 50,
}: {
  username: string;
  fetchCount?: number;
}) => {
  const languages = await fetchGithubLanguageBreakdown(username, fetchCount);

  return (
    <figure>
      <div className={styles.languageContainer}>
        {languages.map(({ language, percentage }) => {
          return (
            <div
              className={styles.language}
              key={language}
              style={{
                width: `${percentage}%`,
                background: languageColors[language] || "black",
              }}
            >
              <label className={styles.label}>
                {language} - {percentage}%
              </label>
            </div>
          );
        })}
      </div>
      <figcaption className={styles.caption}>
        {languages.map(({ language, percentage }) => {
          return (
            <div
              key={`${language}-legend-item`}
              className={styles.languageLegendItem}
            >
              <span
                className={styles.languageBlob}
                style={{
                  background: languageColors[language] || "black",
                }}
              ></span>
              <div className={styles.languageLegendValue.container}>
                <div className={styles.languageLegendValue.language}>
                  {language}
                </div>
                <div className={styles.languageLegendValue.percentage}>
                  {percentage}%
                </div>
              </div>
            </div>
          );
        })}
      </figcaption>
    </figure>
  );
};

export const GithubLanguageBreakdownSkeleton = () => {
  return <></>;
};
