"use client";

import * as styles from "./theme-switcher.css";
import { useRouter } from "next/navigation";
import SunFullIcon from "@/assets/icon/sun-f.svg";
import SunIcon from "@/assets/icon/sun.svg";
import { useTransition } from "react";
import cs from "classnames";

type Props = {
  currentTheme: string | undefined;
};

export const ThemeSwitcher = ({ currentTheme }: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      className={cs(styles.button, { [styles.loading]: isPending })}
      onClick={() =>
        !isPending &&
        fetch(`/api/theme`, {
          method: "POST",
          body: JSON.stringify({
            theme: currentTheme === "dark" ? "light" : "dark",
          }),
        }).then(() => {
          startTransition(() => {
            router.refresh();
          });
        })
      }
    >
      {currentTheme === "light" ? <SunIcon /> : <SunFullIcon />}
    </button>
  );
};
