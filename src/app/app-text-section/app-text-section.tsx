import * as styles from "./app-text-section.css";

export const TextSection = ({
  children,
  title,
}: {
  children: string;
  title?: string;
}) => {
  return (
    <section className={styles.section}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <p
        className={styles.paragraph}
        dangerouslySetInnerHTML={{ __html: children }}
      ></p>
    </section>
  );
};
