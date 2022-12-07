import * as styles from "./app-header.css";

export const Header = ({
  name,
  pseudonym,
  tagline,
}: {
  name: string;
  pseudonym: string;
  tagline: string;
}) => {
  return (
    <header className={styles.header.container}>
      <h1 className={styles.header.title}>{name.toLocaleLowerCase()}</h1>
      <h2 className={styles.header.subtitle}>
        &nbsp;/{pseudonym.toLocaleLowerCase()}
      </h2>
      <h2 className={styles.header.tagline}>{tagline}</h2>
    </header>
  );
};
