"use client";

import { getChainedURLSearchParams } from "@/util/util";
import { useContext, useState, useTransition } from "react";
import { RepoContext } from "../context";
import * as styles from "./repo-list-paginator.css";
import cs from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SpinnerIcon from "@/assets/icon/spinner.svg";

export const RepositoryListPaginator = ({
  page,
  searchParams,
}: {
  page: number;
  searchParams?: { [key: string]: string | string[] };
}) => {
  const [loadingPage, setLoadingPage] = useState<number | null>(null);
  const [, startTransition] = useTransition();
  const router = useRouter();
  const params = getChainedURLSearchParams(searchParams || {});
  const { pageCount } = useContext(RepoContext)!!;

  return (
    <footer className={styles.pageButtons}>
      {[...new Array(pageCount)].map((_, i) => {
        return loadingPage === i + 1 ? (
          <div
            className={cs(styles.pageButton, styles.pageButtonSpinner)}
            key={`${i}-page-btn`}
          >
            <SpinnerIcon class={styles.pageButtonDot} />
          </div>
        ) : (
          <Link
            className={cs(styles.pageButton, {
              [styles.pageButtonActive]: page === i + 1,
            })}
            key={`${i}-page-btn`}
            href={`/repositories?${params.toString()}`}
            onClick={(e) => {
              e.preventDefault();
              setLoadingPage(i + 1);
              startTransition(() => {
                params.delete("page");
                if (i + 1 !== 1) {
                  params.append("page", `${i + 1}`);
                }

                router.push(`/repositories?${params.toString()}`);
                setLoadingPage(null);
              });
            }}
          >
            <span className={styles.pageButtonDot}></span>
          </Link>
        );
      })}
    </footer>
  );
};
