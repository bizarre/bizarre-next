import * as styles from "./app-header.css";
import { PageSelector } from "./app-header-page-selector";
import Link from "next/link";
import GithubIcon from "@/assets/icon/github.svg";
import TwitterIcon from "@/assets/icon/twitter.svg";
import LinkedInIcon from "@/assets/icon/linkedin-square.svg";
import theme from "@/theme";

type Social = "github" | "twitter" | "linkedin";

export const Header = ({
  name,
  pseudonym,
  tagline,
  pages,
  socials,
}: {
  name: string;
  pseudonym: string;
  tagline: string;
  pages: { name: string; color: string; path: string }[];
  socials: { [key in Social]: string };
}) => {
  return (
    <header className={styles.header.container}>
      <h1 className={styles.header.title}>{name}</h1>
      <h2 className={styles.header.subtitle}>&nbsp;/{pseudonym}</h2>
      <h2 className={styles.header.tagline}>{tagline}</h2>
      <PageSelector pages={pages} />

      <ul className={styles.header.socialContainer}>
        {Object.entries(socials).map(([name, url]) => {
          let content;
          switch (name) {
            case "github":
              content = (
                <GithubIcon style={{ color: theme.vars.color.purple }} />
              );
              break;
            case "twitter":
              content = (
                <TwitterIcon style={{ color: theme.vars.color.cyan }} />
              );
              break;
            case "linkedin":
              content = (
                <LinkedInIcon style={{ color: theme.vars.color.blue }} />
              );
              break;
            default:
              content = <></>;
              break;
          }

          return (
            <Link
              href={url}
              target="_blank"
              key={name}
              className={styles.header.social}
            >
              {content}
            </Link>
          );
        })}
      </ul>
    </header>
  );
};
