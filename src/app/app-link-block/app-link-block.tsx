"use client";

import Link from "next/link";
import * as styles from "./app-link-block.css";
import cs from "classnames";
import { usePathname } from "next/navigation";

export const LinkBlock = ({
  to,
  children,
}: {
  to?: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  return to ? (
    <Link
      href={to}
      className={cs(styles.block, styles.active, {
        [styles.selected]: to == pathname,
      })}
    >
      {children}
    </Link>
  ) : (
    <div className={styles.block}>{children}</div>
  );
};
