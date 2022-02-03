import MarkdownWrapper from "./MarkdownWrapper";
import { discountSafe } from "../safe-note-content.js";

export default function SafeDiscount() {
  return (
    <MarkdownWrapper id="safe-valuation-cap-content" content={discountSafe} />
  );
}
