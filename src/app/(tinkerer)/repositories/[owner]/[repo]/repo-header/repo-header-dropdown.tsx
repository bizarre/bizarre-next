"use client";

import * as styles from "./repo-header-dropdown.css";
import { Dropdown } from "@/util/dropdown";
import { Repo } from "@/util/github";
import GithubIcon from "@/assets/icon/github.svg";
import TerminalIcon from "@/assets/icon/terminal.svg";
import Link from "next/link";

export const RepositoryHeaderDropdown = ({ repo }: { repo: Repo }) => {
  const options = [
    {
      element: (
        <Link
          href={`https://github.com/${repo.full_name}`}
          className={styles.item}
          target="_blank"
        >
          <GithubIcon className={styles.icon} /> Open on GitHub
        </Link>
      ),
      value: "github",
      key: "github",
    },
    {
      element: (
        <div className={styles.item}>
          <TerminalIcon className={styles.icon} /> Open via Shipyard
        </div>
      ),
      value: "shipyard",
      key: "shipyard",
    },
  ];

  return (
    <Dropdown
      onSelect={(val) => {}}
      options={options}
      text="open"
      renderCaret={false}
    />
  );
};
