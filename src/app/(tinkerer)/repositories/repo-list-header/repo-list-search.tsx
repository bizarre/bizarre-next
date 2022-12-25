"use client";

import * as styles from "./repo-list-search.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import SearchIcon from "@/assets/icon/search.svg";
import SpinnerIcon from "@/assets/icon/spinner.svg";
import { getChainedURLSearchParams } from "@/util/util";

export const RepositoryListSearch = ({
  initialQuery,
}: {
  initialQuery: string;
}) => {
  const [search, setSearch] = useState(initialQuery);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const query = useSearchParams();
  const chained = getChainedURLSearchParams(new URLSearchParams(query));

  const onChange = (value: string) => {
    setSearch(value);
    startTransition(() => {
      chained.delete("q");
      chained.append("q", value);
      chained.delete("page");
      router.push(`${pathname}?${chained.toString()}`);
    });
  };

  return (
    <div className={styles.searchContainer}>
      <span className={styles.searchIcon}>
        {isPending ? (
          <SpinnerIcon
            width="1em"
            height="1em"
            className={styles.searchSpinner}
          />
        ) : (
          <SearchIcon width="1em" height="1em" />
        )}
      </span>
      <input
        type={"search"}
        className={styles.searchInput}
        placeholder="Search..."
        value={search}
        onChange={(e) => onChange(e.target.value)}
      ></input>
    </div>
  );
};
