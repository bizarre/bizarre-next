import * as styles from "./activity-feed-month-group.css";

export const ActivityFeedMonthGroup = ({
  date,
  children,
}: {
  date: Date;
  children: React.ReactNode;
}) => {
  const [month, year] = date
    .toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    })
    .split(" ");

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h3 className={styles.heading}>
          {month}&nbsp;
          <span className={styles.year}>{year}</span>
        </h3>
        <hr className={styles.hr}></hr>
      </header>
      <div className={styles.content}>{children}</div>
    </section>
  );
};
