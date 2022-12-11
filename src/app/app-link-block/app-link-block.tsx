"use client";

import Link from "next/link";
import * as styles from "./app-link-block.css";
import cs from "classnames";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useTransition } from "react";

const Wrapper = ({
  children,
  className,
  onClick,
  href,
}: {
  children: React.ReactNode;
  className: string;
  onClick: React.MouseEventHandler;
  href: string;
}) => (
  <div className={cs(className, styles.wrapper)}>
    <>
      <Link {...{ onClick, href }} className={styles.link}></Link>
      {children}
    </>
  </div>
);

export const LinkBlock = ({
  to,
  ready = true,
  children,
  refresh = false,
}: {
  to?: string;
  ready?: boolean;
  children: React.ReactNode;
  refresh?: boolean;
}) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  return to && ready ? (
    <Wrapper
      key={to}
      href={to}
      onClick={(e) => {
        e.preventDefault();

        if (to === pathname) {
          return;
        }

        startTransition(() => {
          router.push(to);

          if (refresh) {
            router.refresh();
          }
        });
      }}
      className={cs(styles.block, styles.active, {
        [styles.selected]: to === pathname,
        [styles.loading]: isPending,
      })}
    >
      {children}
    </Wrapper>
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
