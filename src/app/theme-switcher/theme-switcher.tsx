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

async function setTheme(theme: string, refresh: () => void) {
  await fetch(`/api/theme`, {
    method: "POST",
    body: JSON.stringify({ theme }),
  });

  refresh();
}

export const ThemeSwitcher = ({ currentTheme }: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      className={cs(styles.button, { [styles.loading]: isPending })}
      onClick={() =>
        !isPending &&
        setTheme(currentTheme === "dark" ? "light" : "dark", () =>
          startTransition(() => router.refresh())
        )
      }
    >
      {currentTheme === "light" ? <SunIcon /> : <SunFullIcon />}
    </button>
  );
};
