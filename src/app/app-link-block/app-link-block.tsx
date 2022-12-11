"use client";

import Link from "next/link";
import * as styles from "./app-link-block.css";
import cs from "classnames";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useTransition } from "react";

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
        <div {...{ onClick, href }} className={styles.link}></div>
        {children}
      </>
    </div>
  );

  return to && ready ? (
    <Wrapper
      href={to}
      onClick={(e) => {
        e.preventDefault();

        if (to === pathname) {
          return;
        }

        if (refresh) {
          router.refresh();
        }

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
