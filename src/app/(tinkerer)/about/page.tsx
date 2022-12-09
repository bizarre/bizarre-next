import { MarkdownDocument } from "@/util/markdown-document";

export default function AboutPage() {
  // @ts-expect-error Server Component
  return <MarkdownDocument name="about" />;
}
