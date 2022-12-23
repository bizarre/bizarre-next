"use client";

import { usePathname } from "next/navigation";
import * as styles from "./two-pane-flex-view.css";
import cs from "classnames";
import theme from "@/theme";
import ArrowLeftIcon from "@/assets/icon/arrow-left.svg";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  pane: React.ReactNode;
};

export const TwoPaneFlexView = ({ children, pane }: Props) => {
  const pathname = usePathname();

  return (
    <main className={styles.container}>
      <section
        className={cs(styles.pane, {
          [styles.paneMinimized]: pathname !== "/",
        })}
        key="pane"
      >
        {pane}
      </section>
      <section
        className={cs(styles.content, {
          [styles.contentExpanded]: pathname !== "/",
        })}
        key="content"
      >
        <Link
          href="/"
          style={{ justifyContent: "flex-start" }}
          className={cs(theme.button.link, styles.backButton, {
            [styles.hidden]: pathname === "/",
          })}
        >
          <ArrowLeftIcon /> Return to home
        </Link>
        {children}
      </section>
    </main>
  );
};
