import Link from "next/link";
export default function MobileNavigationItem({
  href,
  mobileMenuIsClicked,
  setMobileMenuIsClicked,
  children,
}) {
  return (
    <a
      className="block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded"
      href={href}
      onClick={() => setMobileMenuIsClicked(!mobileMenuIsClicked)}
    >
      <span>{children}</span>
    </a>
  );
}
