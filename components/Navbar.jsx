import NavigationItem from "./NavigationItem";
import { signIn, signOut } from "next-auth/react";

export default function Navbar({
  entityTitle,
  navigationLinks,
  navigationHrefs,
  cta,
  logoSrc,
  session,
}) {
  const [first, last] = [entityTitle?.slice(0, 1), entityTitle?.slice(1)];

  return (
    <nav className="flex justify-between items-center py-8">
      <a className="text-gray-700 text-2xl leading-none" href="#">
        {!!logoSrc ? (
          <img
            className="h-16"
            src={logoSrc}
            alt={`The ${entityTitle} logo`}
            width="auto"
            height="4rem"
          />
        ) : (
          <div className="inline">
            <h1 className="font-extrabold tracking-wide text-indigo-700 text-5xl">
              {first}
              <span className="font-bold text-3xl">{last}</span>
            </h1>
          </div>
        )}
      </a>
      <div className="lg:hidden">
        <button className="block navbar-burger text-indigo-500 hover:text-indigo-500 focus:outline-none">
          <svg
            className="h-4 w-4"
            fill="currentColor "
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <ul className="hidden lg:flex ml-auto mr-10 items-center w-auto space-x-12">
        {navigationLinks?.map((navName, index) => {
          try {
            const href = navigationHrefs[index];
            return (
              <li key={navName + `${index}`}>
                <NavigationItem href={href}>{navName}</NavigationItem>
              </li>
            );
          } catch {
            console.error(
              `An error occured while loading the navigation component. Please file a bug, thanks!`
            );
            return null;
          }
        })}
      </ul>
      {!session ? (
        <button
          className="hidden lg:block px-5 py-3 text-sm font-semibold text-indigo-500 hover:text-white hover:bg-indigo-500 border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
          onClick={() => signIn()}
        >
          Log in
        </button>
      ) : (
        <button
          className="hidden lg:block px-5 py-3 text-sm font-semibold text-indigo-500 hover:text-white hover:bg-indigo-500 border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
          onClick={() => signOut()}
        >
          Log out
        </button>
      )}
    </nav>
  );
}
