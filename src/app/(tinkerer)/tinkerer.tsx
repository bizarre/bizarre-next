import * as styles from "./tinkerer.css";
import config, { _app_defs } from "@/config";
import { Header } from "@/app/app-header/app-header";
import { TextSection } from "@app/app-text-section/app-text-section";
import {
  GithubLanguageBreakdown,
  GithubLanguageBreakdownSkeleton,
} from "@app/github-language-breakdown/github-language-breakdown";
import {
  GithubContributionChart,
  GithubContributionChartSkeleton,
} from "@app/github-contribution-chart/github-contribution-chart";
import { Suspense } from "react";
import { LinkBlock } from "@app/app-link-block/app-link-block";
import ErrorBoundary from "@/util/error-boundary";
import {
  GithubRepoBlock,
  GithubRepoBlockSkeleton,
} from "@app/github-repo-block/github-repo-block";

export const TinkererPage = () => {
  return (
    <>
      <Header
        name={config.name}
        pseudonym={config.pseudonym}
        tagline={config.tagline}
        pages={_app_defs.pages}
        socials={config.socials}
      />
      <LinkBlock to="/about">
        <TextSection title="about me">{config.about.tech}</TextSection>
      </LinkBlock>
      <Suspense
        fallback={
          <>
            <LinkBlock to="/repositories" ready={false}>
              <GithubLanguageBreakdownSkeleton />
            </LinkBlock>
            <LinkBlock to="/activity" ready={false}>
              <GithubContributionChartSkeleton />
            </LinkBlock>
            {config.repos.map((repo) => {
              const owner = repo.includes("/")
                ? repo.split("/")[0]
                : config.github;
              const repository = repo.includes("/") ? repo.split("/")[1] : repo;

              return (
                <LinkBlock
                  key={repo}
                  to={`repositories/${owner}/${repository}`}
                >
                  <GithubRepoBlockSkeleton />
                </LinkBlock>
              );
            })}
          </>
        }
      >
        <LinkBlock to="/repositories">
          <ErrorBoundary fallback={<GithubLanguageBreakdownSkeleton />}>
            {/* @ts-expect-error Server Component */}
            <GithubLanguageBreakdown username={config.github} />
          </ErrorBoundary>
        </LinkBlock>
        <LinkBlock to="/activity">
          {/* @ts-expect-error Server Component */}
          <GithubContributionChart username={config.github} />
        </LinkBlock>
        {config.repos.map((repo) => {
          const owner = repo.includes("/") ? repo.split("/")[0] : config.github;
          const repository = repo.includes("/") ? repo.split("/")[1] : repo;

          return (
            <LinkBlock key={repo} to={`repositories/${owner}/${repository}`}>
              {/* @ts-expect-error Server Component */}
              <GithubRepoBlock owner={owner} repository={repository} />
            </LinkBlock>
          );
        })}
      </Suspense>
    </>
  );
};
