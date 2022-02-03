/* eslint-disable react/no-children-prop */
import ReactMarkdown from "react-markdown";

export default function MarkdownWrapper({ id, content, className }) {
  return <ReactMarkdown id={id} className={className} children={content} />;
}
