"use client";

import * as styles from "./dropdown.css";
import CaretIcon from "@/assets/icon/caret.svg";

export const Dropdown = <T,>({
  options,
  text,
  onSelect,
}: {
  onSelect: (value: T) => void;
  text: React.ReactNode;
  options: { element: React.ReactNode; value: T }[];
}) => {
  return (
    <div>
      <button className={styles.button}>
        <span>{text}</span> <CaretIcon className={styles.caret} />
      </button>
    </div>
  );
};
