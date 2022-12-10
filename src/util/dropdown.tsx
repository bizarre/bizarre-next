"use client";

import * as styles from "./dropdown.css";
import CaretIcon from "@/assets/icon/caret.svg";
import { useState } from "react";
import cs from "classnames";

export const Dropdown = <T,>({
  options,
  text,
  onSelect,
  minWidth,
}: {
  onSelect: (value: T) => void;
  text: React.ReactNode;
  options: { element: React.ReactNode; value: T; key: string }[];
  minWidth?: string;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.container}>
      <button
        className={cs(styles.button, { [styles.buttonExpanded]: expanded })}
        onClick={() => setExpanded(!expanded)}
      >
        <span>{text}</span> <CaretIcon className={styles.caret} />
      </button>
      {expanded && (
        <div
          className={styles.blanket}
          onClick={() => setExpanded(false)}
        ></div>
      )}
      <div className={cs(styles.dropdown, { [styles.hidden]: !expanded })} style={{ minWidth }}>
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
