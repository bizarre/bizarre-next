import * as styles from "./github-language-breakdown.css";
import languageColors from "@/util/language-colors";
import { _app_defs } from "@/config";
import { Skeleton } from "@/util/skeleton";
import classNames from "classnames";
import theme from "@/theme";
import Link from "next/link";

const fetchGithubLanguageBreakdown = async (
  username: string,
  fetchCount: number
): Promise<{ language: string; percentage: number }[]> => {
  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL
    }/api/languages?username=${username}&count=${fetchCount}&languageFilter=${_app_defs.language_filter.join(
      ","
    )}`,
    {
      next: { revalidate: Infinity },
    }
  );

  return await response.json();
};

export const GithubLanguageBreakdown = async ({
  username,
  fetchCount = 5,
  renderHeading = true,
}: {
  username: string;
  fetchCount?: number;
  renderHeading?: boolean;
}) => {
  const languages = await fetchGithubLanguageBreakdown(username, fetchCount);

  return (
    <>
      {renderHeading && (
        <h1 className={styles.heading}>
          <strong className={styles.headingFocus}>{languages.length}</strong>{" "}
          recently used languages
        </h1>
      )}
      <figure>
        <div className={styles.languageContainer}>
          {languages.map(({ language, percentage }) => {
            return (
              <Link
                href={`/repositories?l=${language}`}
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
              </Link>
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
    </>
  );
};

export const GithubLanguageBreakdownSkeleton = ({
  renderHeading = true,
}: {
  renderHeading?: boolean;
}) => {
  return (
    <>
      {renderHeading && (
        <Skeleton
          height="20px"
          width="250px"
          className={styles.heading}
        ></Skeleton>
      )}
      <figure>
        <div className={styles.languageContainer}>
          <div
            className={classNames(styles.language, theme.skeleton)}
            style={{ width: "100%" }}
          ></div>
        </div>
        <figcaption className={styles.caption}>
          {[...Array(5)].map((_, i) => {
            return (
              <div
                key={`${i}-legend-item`}
                className={styles.languageLegendItem}
              >
                <span
                  className={classNames(theme.skeleton, styles.languageBlob)}
                ></span>
                <div className={styles.languageLegendValue.container}>
                  <Skeleton
                    className={styles.languageLegendValue.language}
                    width={"47px"}
                    height={theme.vars.text.size.sm}
                  />
                  <Skeleton
                    className={styles.languageLegendValue.percentage}
                    width={"25px"}
                    height={"0.8em"}
                  />
                </div>
              </div>
            );
          })}
        </figcaption>
      </figure>
    </>
  );
};
