import "reset-css/reset.css";
import { Inter } from "@next/font/google";
import * as styles from "./layout.css";
import { cookies } from "next/headers";
import { ThemeSwitcher } from "./theme-switcher/theme-switcher";
import theme from "@/theme";
import cs from "classnames";
import { AnalyticsWrapper } from "./analytics";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const savedTheme = cookies().get("theme")?.value;

  let currentTheme = theme.dynamicTheme;
  if (savedTheme) {
    if (savedTheme === "dark") {
      currentTheme = theme.dark;
    } else if (savedTheme === "light") {
      currentTheme = theme.light;
    }
  }

  return (
    <html lang="en" className={currentTheme}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${styles.body} ${inter.className}`}>
        <ThemeSwitcher currentTheme={savedTheme} />
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
