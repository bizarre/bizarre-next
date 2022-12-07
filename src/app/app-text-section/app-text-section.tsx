import * as styles from "./app-text-section.css";

export const TextSection = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <section className={styles.section}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <p className={styles.paragraph}>{children}</p>
    </section>
  );
};
