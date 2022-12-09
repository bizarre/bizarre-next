import config from "@/config";
import { LinkBlock } from "@app/app-link-block/app-link-block";
import {
  GithubRepoBlock,
  GithubRepoBlockSkeleton,
} from "@app/github-repo-block/github-repo-block";

const PER_PAGE = 6;

type Repo = {
  full_name: string;
  owner: { login: string };
  name: string;
};

export const RepositoryList = async ({ repos }: { repos: Repo[] }) => {
  return (
    <div>
      {repos.slice(0, PER_PAGE).map((repo) => {
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
