import classNames from "classnames";
import Link from "next/link";
import * as styles from "./app-link-block.css";
import cs from "classnames";

export const LinkBlock = ({
  to,
  children,
}: {
  to?: string;
  children: React.ReactNode;
}) => {
  return to ? (
    <Link href={to} className={cs(styles.block, styles.active)}>
      {children}
    </Link>
  ) : (
    <div className={styles.block}>{children}</div>
  );
};
