"use client";

import { usePathname } from "next/navigation";
import * as styles from "./two-pane-flex-view.css";
import cs from "classnames";

type Props = {
  children: React.ReactNode;
  pane: React.ReactNode;
};

export const TwoPaneFlexView = ({ children, pane }: Props) => {
  const pathname = usePathname();

  return (
    <main className={styles.container}>
      <section className={styles.pane} key="pane">
        {pane}
      </section>
      <section
        className={cs(styles.content, {
          [styles.contentExpanded]: pathname !== "/",
        })}
        key="content"
      >
        {children}
      </section>
    </main>
  );
};
