"use client";

import * as styles from "./repo-list-language-filter.css";
import { Dropdown } from "@/util/dropdown";
import languageColors from "@/util/language-colors";
import { useEffect, useState, useTransition } from "react";
import cs from "classnames";
import SpinnerIcon from "@/assets/icon/spinner.svg";
import CloseIcon from "@/assets/icon/close.svg";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import theme from "@/theme";

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
}: {
  selectedLanguages: string[];
}) => {
  return (
    <ul className={styles.selectedButtonContent}>
      {selectedLanguages.map((i) => (
        <li
          key={i}
          className={styles.blob}
          style={{ background: languageColors[i] }}
        ></li>
      ))}
    </ul>
  );
};

type QueuedAction = { language: string; action: "add" | "remove" };

export const RepositoryListLanguageFilter = ({
  languages,
  selectedLanguages,
}: {
  languages: string[];
  selectedLanguages: string[];
}) => {
  const [modifying, setModifying] = useState<string[]>([]);
  const [queued, setQueued] = useState<QueuedAction[]>([]);
  const [, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const query = useSearchParams();
  const text =
    selectedLanguages.length === 0 ? (
      <span className={styles.emptyButtonContent}>Language</span>
    ) : (
      <RepositoryLanguageButtonContent selectedLanguages={selectedLanguages} />
    );

  const sortedLanguages = [
    ...selectedLanguages,
    ...languages.filter((i) => !selectedLanguages.includes(i)),
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
            selected={selectedLanguages.includes(language)}
          />
        ),
        value: language,
        key: language,
      }))}
      onSelect={(language) => {
        setModifying([...modifying, language]);

        let newQueued: QueuedAction[];
        if (selectedLanguages.includes(language)) {
          newQueued = [...queued, { language, action: "remove" }];
        } else {
          newQueued = [...queued, { language, action: "add" }];
        }

        setQueued(newQueued);

        startTransition(() => {
          const languageQuery = query
            .getAll("l")
            .filter(
              (i) =>
                !newQueued
                  .filter((i) => i.action === "remove")
                  .map((i) => i.language)
                  .includes(i)
            )
            .reduce((acc, i) => {
              return acc + `&l=${i}`;
            }, "");

          const oldQuery = [...query.keys()]
            .filter((i) => i !== "l")
            .map((i) => {
              console.log(i);
              return { q: query.getAll(i), k: i };
            })
            .reduce((acc, { q, k }) => {
              return acc + q.map((i) => `&${k}=${i}`).join("");
            }, "");

          router.replace(
            `${pathname}?${oldQuery}&${new URLSearchParams(
              languageQuery
            ).toString()}${newQueued
              .filter((i) => i.action === "add")
              .map((i) => `&l=${i.language}`)
              .join("")}`
          );

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
