import * as styles from "./github-contribution-chart.css";
import theme from "@/theme";
import { Skeleton } from "@/util/skeleton";

type Intensity = 4 | 3 | 2 | 1 | 0;
const size = 8;
const gap = 2;
const borderRadius = 1.5;

const getLastDayOfCurrentWeek = () => {
  const today = new Date();
  const day = today.getDay();
  const diff = today.getDate() - day + 1;
  const sixth = diff + 5;

  return new Date(today.setDate(sixth));
};

const fetchGithubContributions = async (
  username: string,
  days = 52 * 7,
  from = getLastDayOfCurrentWeek()
): Promise<[{ intensity: Intensity; date: Date }[], number]> => {
  const response = await fetch(
    `https://ghcc-bzr.vercel.app/api/v1/${username}`
  );
  const data = await response.json();

  const contributions = data.contributions;
  const offset = contributions.findIndex(
    (i: any) => i.date === from.toISOString().split("T")[0]
  );

  const toReturn: { intensity: Intensity; date: Date }[] = [];
  let count = 0;
  for (let i = 0; i < days; i++) {
    const item = contributions[offset + i];

    toReturn.push({
      intensity: parseInt(item.intensity) as Intensity,
      date: new Date(item.date),
    });
    count += item.count;
  }

  return [toReturn.reverse(), count];
};

export const GithubContributionChart = async ({
  username,
  renderHeading = true,
}: {
  username: string;
  renderHeading?: boolean;
}) => {
  const [contributions, count] = await fetchGithubContributions(username);
  const currentDate = new Date();

  return (
    <>
      {renderHeading && (
        <h1 className={styles.heading}>
          <strong className={styles.headingFocus}>{count}</strong> contributions
          in the last year
        </h1>
      )}
      <svg
        width={"100%"}
        viewBox={`0 0 ${(size + gap) * 52} ${(size + gap) * 7}`}
      >
        <g>
          {[...Array(52)].map((_, i) => {
            return (
              <g key={i} transform={`translate(${(size + gap) * i}, 0)`}>
                {[...Array(7)].map((_, j) => {
                  const y = j * size;
                  const item = contributions[i * 7 + j];
                  return (
                    <rect
                      key={(j + 1) * (i + 1)}
                      width={size}
                      height={size}
                      y={y + gap * j}
                      rx={borderRadius}
                      ry={borderRadius}
                      style={{
                        outline:
                          item.intensity > 0
                            ? "1px solid rgba(255, 255, 255, 0.07)"
                            : "none",
                        outlineOffset: "-1px",
                      }}
                      fill={
                        item.date > currentDate
                          ? "none"
                          : theme.vars.color.github_contributions[
                              item.intensity
                            ]
                      }
                    ></rect>
                  );
                })}
              </g>
            );
          })}
        </g>
      </svg>
    </>
  );
};

export const GithubContributionChartSkeleton = ({
  renderHeading = true,
}: {
  renderHeading?: boolean;
}) => {
  return (
    <>
      {renderHeading && (
        <Skeleton
          height={theme.vars.text.size.md}
          width="250px"
          className={styles.heading}
        ></Skeleton>
      )}
      <svg
        width={"100%"}
        viewBox={`0 0 ${(size + gap) * 52} ${(size + gap) * 7}`}
      >
        <g>
          {[...Array(52)].map((_, i) => {
            return (
              <g key={i} transform={`translate(${(size + gap) * i}, 0)`}>
                {[...Array(7)].map((_, j) => {
                  const y = j * size;
                  return (
                    <rect
                      key={(j + 1) * (i + 1)}
                      width={size}
                      height={size}
                      y={y + gap * j}
                      rx={borderRadius}
                      ry={borderRadius}
                      className={theme.skeleton}
                    ></rect>
                  );
                })}
              </g>
            );
          })}
        </g>
      </svg>
    </>
  );
};
