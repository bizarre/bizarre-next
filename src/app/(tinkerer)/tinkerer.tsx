import * as styles from "./tinkerer.css";
import config, { _app_defs } from "@/config";
import { Header } from "@/app/app-header/app-header";
import { TextSection } from "@app/app-text-section/app-text-section";
import {
  GithubLanguageBreakdown,
  GithubLanguageBreakdownSkeleton,
} from "@app/github-language-breakdown/github-language-breakdown";
import { GithubContributionChart } from "@app/github-contribution-chart/github-contribution-chart";
import { Suspense } from "react";
import { LinkBlock } from "@app/app-link-block/app-link-block";
import ErrorBoundary from "@/util/error-boundary";

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
      <TextSection title="about me">{config.about.tech}</TextSection>
      <Suspense
        fallback={
          <LinkBlock to="/repos" ready={false}>
            <GithubLanguageBreakdownSkeleton />
          </LinkBlock>
        }
      >
        <LinkBlock to="/repos">
          <ErrorBoundary fallback={<GithubLanguageBreakdownSkeleton />}>
            {/* @ts-expect-error Server Component */}
            <GithubLanguageBreakdown username={config.github} />
          </ErrorBoundary>
        </LinkBlock>
      </Suspense>
      <Suspense>
        <LinkBlock to="/contributions">
          {/* @ts-expect-error Server Component */}
          <GithubContributionChart username={config.github} />
        </LinkBlock>
      </Suspense>
    </>
  );
};
