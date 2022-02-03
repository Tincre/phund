import MarkdownWrapper from "./MarkdownWrapper";
import { mfnSafe } from "../safe-note-content.js";

export default function SafeMfn() {
  return <MarkdownWrapper id="safe-mfn-content" content={mfnSafe} />;
}
