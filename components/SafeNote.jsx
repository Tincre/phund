import { resolveSafeTypeToComponent } from "../lib/utils";

export default function SafeNote({ safeType }) {
  const Safe = resolveSafeTypeToComponent(safeType);
  return <Safe />;
}
