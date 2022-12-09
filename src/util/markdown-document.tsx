import * as styles from "./markdown-document.css";
import fs from "fs";
import { join } from "path";
import { promisify } from "util";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const directory = join(process.cwd(), "_md");
const readFile = promisify(fs.readFile);

export const MarkdownDocument = async ({ name }: { name: string }) => {
  const path = join(directory, `${name}.md`);
  const contents = await readFile(path, "utf8");
  const { content } = matter(contents);

  const result = await remark().use(html).process(content);

  return (
    <div
      className={styles.markdown}
      dangerouslySetInnerHTML={{ __html: result.toString() }}
    ></div>
  );
};
