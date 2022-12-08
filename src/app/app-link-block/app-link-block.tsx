"use client";

import Link from "next/link";
import * as styles from "./app-link-block.css";
import cs from "classnames";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

export const LinkBlock = ({
  to,
  ready = true,
  children,
}: {
  to?: string;
  ready?: boolean;
  children: React.ReactNode;
}) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  return to && ready ? (
    <a
      href={to}
      onClick={(e) => {
        e.preventDefault();

        startTransition(() => {
          router.push(to);
        });
      }}
      className={cs(styles.block, styles.active, {
        [styles.selected]: to === pathname,
        [styles.loading]: isPending,
      })}
    >
      {children}
    </a>
  ) : (
    <div
      className={cs(styles.block, {
        [styles.active]: to === pathname,
        [styles.selectedNotReady]: to === pathname,
      })}
    >
      {children}
    </div>
  );
};
