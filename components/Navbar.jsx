import NavigationItem from "./NavigationItem";

export default function Navbar({
  entityTitle,
  navigationLinks,
  navigationHrefs,
  cta,
}) {
  return (
    <nav className="flex justify-between items-center py-8">
      <a className="text-gray-700 text-2xl leading-none" href="#">
        <img
          className="h-16"
          src="https://res.cloudinary.com/tincre/image/upload/v1638892843/tincre.com/tincre-brand-indigo-800_uatfej.svg"
          alt={`The ${entityTitle} logo`}
          width="auto"
          height="4rem"
        />
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
      <a
        className="hidden lg:block px-5 py-3 text-sm font-semibold text-indigo-500 hover:text-white hover:bg-indigo-500 border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
        href="#"
      >
        {cta}
      </a>
    </nav>
  );
}
