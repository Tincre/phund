import Link from "next/link";
export default function NavigationItem({ href, children }) {
  return (
    <Link href={href}>
      <a className="text-sm hover:text-indigo-700 font-medium" href={href}>
        {children}
      </a>
    </Link>
  );
}
