"use client";

import * as styles from "./repo-list-sort.css";
import { Dropdown } from "@/util/dropdown";
import cs from "classnames";
import BranchIcon from "@/assets/icon/branch.svg";
import StarIcon from "@/assets/icon/star.svg";
import ActivityIcon from "@/assets/icon/activity.svg";
import CalendarIcon from "@/assets/icon/calendar.svg";
import ArrowDownIcon from "@/assets/icon/arrow-down.svg";
import OrderedListIcon from "@/assets/icon/ordered-list.svg";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { getChainedURLSearchParams } from "@/util/util";

enum Sort {
  updated = "Last Updated" as any,
  created = "Creation Date" as any,
  stars = "Stars" as any,
  forks = "Forks" as any,
}

enum SortOrder {
  asc = "asc" as any,
  desc = "desc" as any,
}

const getIconForSort = (sort: Sort, className: string) => {
  switch (sort) {
    case Sort.updated:
      return <ActivityIcon className={className} />;
    case Sort.created:
      return <CalendarIcon className={className} />;
    case Sort.stars:
      return <StarIcon className={className} />;
    case Sort.forks:
      return <BranchIcon className={className} />;
  }
};

export const RepositoryListSort = ({}) => {
  const router = useRouter();
  const pathname = usePathname();
  const query = useSearchParams();
  const chained = getChainedURLSearchParams(new URLSearchParams(query));
  const currentSort = Sort[query.get("sort") as keyof typeof Sort];
  const currentSortOrder = query.get("order") as SortOrder | null;

  const label = currentSort || "Sort";

  const arrow = (
    <ArrowDownIcon
      className={cs(styles.order, {
        [styles.flipped]: currentSortOrder === SortOrder.asc,
      })}
    />
  );

  return (
    <Dropdown
      caret={currentSort ? arrow : undefined}
      onSelect={(i: Sort | SortOrder) => {
        if (i === SortOrder.asc || i === SortOrder.desc) {
          chained.delete("order");
          chained.append("order", SortOrder[i]);
        } else {
          chained.delete("sort");
          chained.append("sort", Sort[i]);
        }

        if (i === currentSort) {
          chained.delete("sort");
        }

        router.push(`${pathname}?${chained.toString()}`);
      }}
      options={[
        {
          element: (
            <div className={cs(styles.item, styles.itemHeader)}>
              <OrderedListIcon className={styles.icon} />
              {currentSortOrder === SortOrder.asc ? "Ascending" : "Descending"}
              {arrow}
            </div>
          ),
          value:
            currentSortOrder === SortOrder.asc ? SortOrder.desc : SortOrder.asc,
          key: "sort",
        },
        ...Object.values(Sort)
          .filter((i) => i.toString().toLowerCase() !== i.toString())
          .map((value: any) => {
            return {
              element: (
                <div
                  className={cs(styles.item, {
                    [styles.selected]: currentSort === value,
                  })}
                >
                  {getIconForSort(value, styles.icon)}
                  {value}
                  <span className={styles.status}></span>
                </div>
              ),
              value: value as Sort | SortOrder,
              key: value,
            };
          }),
      ]}
      text={label}
    />
  );
};
