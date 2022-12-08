// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

type Data = { language: string; percentage: number }[];

type Error = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const username = req.query?.username as string | undefined;

  if (!username) {
    res.status(400).json({ error: "Missing username" });
    return;
  }

  const count = req.query?.count || 50;
  const languageFilter = req.query.languageFilter || [];

  console.log(languageFilter);

  const response = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=${count}&sort=created`,
    {
      headers: { Authorization: `Bearer ${GITHUB_TOKEN}` },
      next: { revalidate: Infinity },
    }
  );

  const repos = await response.json();

  const languages: { [key: string]: number } = {};
  await Promise.all(
    repos?.map(async (repo: any) => {
      if (repo.fork) return;
      if (languageFilter && !languageFilter.includes(repo.language)) return;

      const response = await fetch(repo.languages_url, {
        headers: { Authorization: `Bearer ${GITHUB_TOKEN}` },
        next: { revalidate: Infinity },
      });

      const repoLanguages = await response.json();

      Object.entries(repoLanguages).forEach(([language, bytes]) => {
        if (
          !languageFilter ||
          languageFilter.includes(language) ||
          languageFilter.length === 0
        ) {
          languages[language] = (languages[language] || 0) + (bytes as number);
        }
      });
    })
  );

  const total = Object.entries(languages).reduce(
    (acc, [, count]) => acc + count,
    0
  );

  const toReturn = Object.entries(languages)
    .reduce((acc, [language, count]) => {
      acc.push({
        language: language,
        percentage: Math.round((100.0 / total) * count * 10) / 10,
      });
      return acc;
    }, [] as { language: string; percentage: number }[])
    .sort((a, b) => b.percentage - a.percentage);

  console.log(toReturn);

  res.status(200).json(toReturn);
}
