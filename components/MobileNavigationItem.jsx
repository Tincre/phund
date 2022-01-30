import Link from "next/link";
export default function MobileNavigationItem({ href, children }) {
  return (
    <Link href={href}>
      <a
        className="block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded"
        href={href}
      >
        {children}
      </a>
    </Link>
  );
}
