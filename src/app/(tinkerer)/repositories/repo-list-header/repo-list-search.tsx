"use client";

import * as styles from "./repo-list-search.css";
import { usePathname, useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import SearchIcon from "@/assets/icon/search.svg";
import SpinnerIcon from "@/assets/icon/spinner.svg";

export const RepositoryListSearch = ({
  initialQuery,
}: {
  initialQuery: string;
}) => {
  const [search, setSearch] = useState(initialQuery);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  const onChange = (value: string) => {
    setSearch(value);
    startTransition(() => {
      router.push(`${pathname}?q=${value}`);
    });
  };

  return (
    <div className={styles.container}>
      <span className={styles.icon}>
        {isPending ? (
          <SpinnerIcon width="1em" height="1em" className={styles.spinner} />
        ) : (
          <SearchIcon width="1em" height="1em" />
        )}
      </span>
      <input
        className={styles.input}
        placeholder="Search"
        value={search}
        onChange={(e) => onChange(e.target.value)}
      ></input>
    </div>
  );
};
