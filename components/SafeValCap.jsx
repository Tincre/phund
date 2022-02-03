import MarkdownWrapper from "./MarkdownWrapper";
import { valuationCapSafe } from "../safe-note-content.js";

export default function ValCap() {
  return (
    <MarkdownWrapper
      id="safe-valuation-cap-content"
      content={valuationCapSafe}
    />
  );
}
