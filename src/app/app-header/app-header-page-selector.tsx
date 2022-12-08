"use client";

import * as styles from "./app-header-page-selector.css";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import cs from "classnames";

export const PageSelector = ({
  pages,
}: {
  pages: { name: string; color: string; path: string }[];
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  return (
    <ul className={styles.list}>
      {pages.map(({ name, color, path }) => {
        const underlined = pathname?.startsWith(path);
        return (
          <li key={name}>
            <a
              href={path}
              onClick={(e) => {
                e.preventDefault();

                startTransition(() => {
                  router.push(path);
                });
              }}
              className={cs(
                styles.item,
                { [styles.focus]: underlined },
                { [styles.loading]: isPending }
              )}
              style={{ color }}
            >
              {name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
