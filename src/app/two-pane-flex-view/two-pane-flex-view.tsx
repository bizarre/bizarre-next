import * as styles from "./two-pane-flex-view.css";

type Props = {
  children: React.ReactNode;
  pane: React.ReactNode;
};

export const TwoPaneFlexView = ({ children, pane }: Props) => {
  return (
    <main className={styles.container}>
      <section className={styles.pane}>{pane}</section>
      <section>{children}</section>
    </main>
  );
};
