import { getChainedURLSearchParams } from "@/util/util";
import { LinkBlock } from "@app/app-link-block/app-link-block";
import {
  GithubRepoBlock,
  GithubRepoBlockSkeleton,
} from "@app/github-repo-block/github-repo-block";
import Link from "next/link";
import cs from "classnames";

export const PER_PAGE = 5;

type Repo = {
  full_name: string;
  owner: { login: string };
  name: string;
};

export const RepositoryList = async ({
  repos,
  page,
  searchParams,
}: {
  repos: Repo[];
  page: number;
  searchParams: { [key: string]: string | string[] };
}) => {
  const start = (page - 1) * PER_PAGE;

  return (
    <div style={{ minHeight: "490px" }}>
      {repos.slice(start, start + PER_PAGE).map((repo) => {
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
