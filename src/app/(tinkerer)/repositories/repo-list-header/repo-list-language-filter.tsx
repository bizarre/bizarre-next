"use client";

import * as styles from "./repo-list-language-filter.css";
import { Dropdown } from "@/util/dropdown";
import languageColors from "@/util/language-colors";
import { useContext, useEffect, useState, useTransition } from "react";
import cs from "classnames";
import SpinnerIcon from "@/assets/icon/spinner.svg";
import CloseIcon from "@/assets/icon/close.svg";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import theme from "@/theme";

// @ts-ignore
import sync from "css-animation-sync";
import { RepoContext } from "../context";

if (typeof window !== "undefined") {
  sync(theme.spin);
}

export const RepositoryLanguageItem = ({
  language,
  modifying,
  selected,
}: {
  language: string;
  modifying: boolean;
  selected: boolean;
}) => {
  const color = languageColors[language] || theme.vars.color.text.dim;

  return (
    <div
      className={cs(styles.item, {
        [styles.modifying]: modifying && !selected,
        [styles.selected]: selected,
      })}
    >
      {modifying && (
        <SpinnerIcon className={styles.spinner} style={{ color }} />
      )}

      {!modifying && !selected && (
        <span className={styles.blob} style={{ background: color }}></span>
      )}

      {selected && !modifying && (
        <button className={styles.deselectButton}>
          <CloseIcon className={styles.deselect} style={{ color }} />
        </button>
      )}
      <span>{language}</span>
    </div>
  );
};

export const RepositoryLanguageButtonContent = ({
  selectedLanguages,
  modifying,
}: {
  selectedLanguages: string[];
  modifying: string[];
}) => {
  return (
    <ul className={styles.selectedButtonContent}>
      {selectedLanguages.map((i) => {
        const color = languageColors[i] || theme.vars.color.text.dim;
        return modifying.includes(i) ? (
          <SpinnerIcon key={i} className={styles.spinner} style={{ color }} />
        ) : (
          <li
            key={i}
            className={styles.blob}
            style={{ background: languageColors[i] }}
          ></li>
        );
      })}
    </ul>
  );
};

type QueuedAction = { language: string; action: "add" | "remove" };

export const RepositoryListLanguageFilter = ({
  selectedLanguages,
}: {
  selectedLanguages: string[];
}) => {
  const { languages } = useContext(RepoContext) || { languages: [] };
  const [modifying, setModifying] = useState<string[]>([]);
  const [queued, setQueued] = useState<QueuedAction[]>([]);
  const [, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const query = useSearchParams();

  const mixedSelected = [
    ...selectedLanguages,
    ...queued.filter((i) => i.action === "add").map((i) => i.language),
  ].filter(
    (i) => !queued.some((j) => j.language === i && j.action === "remove")
  );

  const text =
    mixedSelected.length === 0 ? (
      <span className={styles.emptyButtonContent}>Language</span>
    ) : (
      <RepositoryLanguageButtonContent
        selectedLanguages={mixedSelected}
        modifying={modifying}
      />
    );

  const sortedLanguages = [
    ...mixedSelected,
    ...languages.filter(
      (i) => !mixedSelected.includes(i) && modifying.includes(i)
    ),
    ...languages.filter(
      (i) => !mixedSelected.includes(i) && !modifying.includes(i)
    ),
  ];

  return (
    <Dropdown
      minWidth="150px"
      text={text}
      options={sortedLanguages.map((language) => ({
        element: (
          <RepositoryLanguageItem
            language={language}
            modifying={modifying.includes(language)}
            selected={mixedSelected.includes(language)}
          />
        ),
        value: language,
        key: language,
      }))}
      onSelect={(language) => {
        if (queued.some((i) => i.language === language)) {
          return;
        }

        setModifying([...modifying, language]);

        let newQueued: QueuedAction[];
        if (selectedLanguages.includes(language)) {
          newQueued = [...queued, { language, action: "remove" }];
        } else {
          newQueued = [...queued, { language, action: "add" }];
        }

        setQueued(newQueued);

        startTransition(() => {
          const q = new URLSearchParams(query);

          q.delete("l");
          q.delete("page");
          q.append("page", "1");

          [
            ...selectedLanguages.filter(
              (l) =>
                !newQueued.some(
                  (i) => i.language === l && i.action === "remove"
                )
            ),
            ...newQueued
              .filter((i) => i.action === "add")
              .map((i) => i.language),
          ].forEach((i) => q.append("l", i));

          router.replace(`${pathname}?${q.toString()}`);

          setModifying(
            modifying.filter(
              (i) => !newQueued.map((l) => l.language).includes(i)
            )
          );

          setQueued([]);
        });
      }}
    />
  );
};
