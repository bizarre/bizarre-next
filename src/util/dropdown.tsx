"use client";

import * as styles from "./dropdown.css";
import CaretIcon from "@/assets/icon/caret.svg";
import { useEffect, useRef, useState } from "react";
import cs from "classnames";

export const Dropdown = <T,>({
  options,
  text,
  onSelect,
  minWidth,
  caret,
}: {
  onSelect: (value: T) => void;
  text: React.ReactNode;
  options: { element: React.ReactNode; value: T; key: string }[];
  minWidth?: string;
  caret?: React.ReactNode;
}) => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handler: (e: MouseEvent) => void;

    if (ref.current && expanded) {
      handler = (e: MouseEvent) => {
        if (!ref.current?.contains(e.target as Element)) {
          setExpanded(false);
        }
      };

      document.addEventListener("click", handler);
    }

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [ref, expanded, setExpanded]);

  return (
    <div className={styles.container}>
      <button
        className={cs(styles.button, { [styles.buttonExpanded]: expanded })}
        onClick={() => setExpanded(!expanded)}
      >
        <span>{text}</span>{" "}
        {(caret && <span className={styles.caret}>{caret}</span>) || (
          <CaretIcon className={styles.caret} />
        )}
      </button>
      <div
        className={cs(styles.dropdown, { [styles.hidden]: !expanded })}
        style={{ minWidth }}
        ref={ref}
      >
        {options.map(({ element, value, key }) => (
          <div
            key={key}
            className={styles.dropdownItem}
            onClick={() => onSelect(value)}
          >
            {element}
          </div>
        ))}
      </div>
    </div>
  );
};
