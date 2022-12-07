"use client";

import * as styles from "./app-header-page-selector.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const PageSelector = ({
  pages,
}: {
  pages: { name: string; color: string; path: string }[];
}) => {
  const pathname = usePathname();

  return (
    <ul className={styles.list}>
      {pages.map(({ name, color, path }) => {
        const underlined = pathname?.startsWith(path);
        return (
          <li key={name}>
            <Link
              prefetch={false}
              href={path}
              className={underlined ? styles.focus : styles.item}
              style={{ color }}
            >
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
