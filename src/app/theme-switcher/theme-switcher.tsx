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

  let theme = currentTheme;
  if (!theme && typeof window !== "undefined") {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    theme = query.matches ? "dark" : "light";
  }

  return (
    <button
      className={cs(styles.button, { [styles.loading]: isPending })}
      onClick={() =>
        !isPending &&
        fetch(`/api/theme`, {
          method: "POST",
          body: JSON.stringify({
            theme: theme === "dark" ? "light" : "dark",
          }),
        }).then(() => {
          startTransition(() => {
            router.refresh();
          });
        })
      }
    >
      {theme === "light" ? <SunIcon /> : <SunFullIcon />}
    </button>
  );
};
