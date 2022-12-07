// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  theme: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const theme = JSON.parse(req.body).theme || "dark";

  res
    .status(200)
    .setHeader(
      "Set-Cookie",
      `theme=${theme}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT;`
    )
    .json({ theme });
}
