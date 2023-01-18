import * as styles from "./markdown-document.css";
import { readFile } from "fs/promises";
import { join } from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import html from "remark-html";

const directory = join(process.cwd(), "_md");

export const MarkdownDocument = async ({ name }: { name: string }) => {
  const path = join(directory, `${name}.md`);
  const contents = await readFile(path, "utf8");
  const { content } = matter(contents);

  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(html)
    .process(content);

  return (
    <div
      className={styles.markdown}
      dangerouslySetInnerHTML={{ __html: result.toString() }}
    ></div>
  );
};
