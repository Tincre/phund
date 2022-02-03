import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import raw from "rehype-raw";

export default function MarkdownWrapper({ id, content, className }) {
  return (
    <ReactMarkdown
      id={id}
      className={className}
      children={content}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[raw]}
    />
  );
}
