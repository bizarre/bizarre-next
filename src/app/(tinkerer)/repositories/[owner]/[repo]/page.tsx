import * as styles from "./page.css";
import { Repo } from "@/util/github";
import { RepositoryHeader } from "./repo-header/repo-header";
import { markdown } from "@/util/markdown-document.css";

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const getGithubRepositoryWithReadme = async (
  owner: string,
  repo: string
): Promise<[Repo, string]> => {
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}`,
    {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    }
  );

  const readme = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/readme`,
    {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.html",
      },
    }
  );

  return [await response.json(), await readme.text()];
};

export default async function Page({
  params,
}: {
  params: { owner: string; repo: string };
}) {
  const { owner, repo } = params;
  const [repository, readme] = await getGithubRepositoryWithReadme(owner, repo);

  // TODO: replace relative links in readme with full github urls
  const linksRewritten = readme;

  return (
    <div>
      <RepositoryHeader repo={repository} />
      <h2 className={styles.readmeHeading}>README.md</h2>
      <div className={styles.content}>
        <div
          className={markdown}
          dangerouslySetInnerHTML={{ __html: linksRewritten }}
        ></div>
      </div>
    </div>
  );
}
