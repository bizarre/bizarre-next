import "reset-css/reset.css";
import { Inter } from "@next/font/google";
import * as styles from "./layout.css";
import { cookies } from "next/headers";
import { ThemeSwitcher } from "./theme-switcher/theme-switcher";
import theme from "@/theme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentTheme = cookies().get("theme")?.value;

  return (
    <html
      lang="en"
      className={currentTheme === "light" ? theme.light : theme.dark}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${styles.body} ${inter.className}`}>
        <ThemeSwitcher currentTheme={currentTheme} />
        {children}
      </body>
    </html>
  );
}
