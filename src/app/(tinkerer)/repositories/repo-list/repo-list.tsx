import config from "@/config";
import { LinkBlock } from "@app/app-link-block/app-link-block";
import {
  GithubRepoBlock,
  GithubRepoBlockSkeleton,
} from "@app/github-repo-block/github-repo-block";

const PER_PAGE = 5;
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

type Repo = {
  full_name: string;
  owner: { login: string };
  name: string;
};

const fetchGithubRepositories = async (
  query: string,
  owner: string,
  pageSize: number = PER_PAGE
): Promise<{ amount: number; repos: Repo[] }> => {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=${query}+user:${owner}&per_page=${pageSize}&sort=updated`,
    { headers: { Authorization: `Bearer ${GITHUB_TOKEN}` } }
  );
  const data = await response.json();

  return { amount: data.total_count, repos: data.items };
};

export const RepositoryList = async ({ query }: { query: string }) => {
  let { amount, repos } = await fetchGithubRepositories(query, config.github);

  return (
    <div>
      {repos.map((repo) => {
        return (
          <LinkBlock
            to={`/repositories/${repo.owner.login}/${repo.name}`}
            key={repo.full_name}
          >
            {/* @ts-expect-error Server Component */}
            <GithubRepoBlock owner={repo.owner.login} repository={repo.name} />
          </LinkBlock>
        );
      })}
    </div>
  );
};

export const RepositoryListSkeleton = () => {
  return (
    <div>
      {[...Array(PER_PAGE)].map((_, i) => {
        return (
          <LinkBlock to="#" key={i} ready={false}>
            <GithubRepoBlockSkeleton />
          </LinkBlock>
        );
      })}
    </div>
  );
};
