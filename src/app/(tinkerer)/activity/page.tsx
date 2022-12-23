import classNames from "classnames";
import * as styles from "./page.css";
import cs from "classnames";
import config from "@/config";
import { ActivityFeedMonthGroup } from "./activity-feed/activity-feed-month-group";
import { ActivityFeedItem } from "./activity-feed/activity-feed-item";

export type GithubEvent = {
  id: string;
  type: string;
  created_at: Date;
  repo: {
    name: string;
    id: number;
  };
  payload: any;
};

const getXPublicGithubEvents = async (
  owner: string,
  page = 1,
  size = 500,
  _page = 1,
  _count = 0
): Promise<GithubEvent[]> => {
  const response = await fetch(
    `https://api.github.com/users/${owner}/events/public?page=${
      _page + (page - 1) * 5
    }&per_page=100`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
    }
  );

  console.log(
    `https://api.github.com/users/${owner}/events/public?page=${
      _page + (page - 1) * 5
    }&per_page=100}`
  );

  const events = await response.json();

  if (events.length === 100 && _count < size) {
    return [
      ...events,
      ...(await getXPublicGithubEvents(
        owner,
        page,
        size,
        _page + 1,
        _count + events.length
      )),
    ];
  }

  return events;
};

const getPublicGithubEvents = async (owner: string, page = 1) => {
  const events = await getXPublicGithubEvents(owner, page);

  const monthEventMap = events.reduce((acc: any, event: any) => {
    const day = new Date(event.created_at);
    const month = new Date(day.getFullYear(), day.getMonth(), 1);

    const prev = acc[month.toDateString()] || [];
    prev.push(event);

    acc[month.toDateString()] = prev;

    return acc;
  }, {});

  const monthEventTypeMap = Object.keys(monthEventMap).reduce(
    (acc: any, month: any) => {
      const item = acc[month] || [];

      acc[month] = item.reduce((acc: any, event: any) => {
        const prev = acc[event.type] || [];
        prev.push(event);

        acc[event.type] = prev;

        return acc;
      }, {});

      return acc;
    },
    monthEventMap
  );

  return monthEventTypeMap;
};

export default async function Page() {
  const events = await getPublicGithubEvents(config.github);

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>contribution activity </h1>
      {Object.keys(events).map((key) => {
        return (
          <>
            <ActivityFeedMonthGroup date={new Date(key)}>
              {Object.keys(events[key]).map((type: string) => {
                return (
                  <ActivityFeedItem
                    key={`${key}-${type}`}
                    type={type}
                    activities={events[key][type]}
                  />
                );
              })}
            </ActivityFeedMonthGroup>
          </>
        );
      })}
    </div>
  );
}
