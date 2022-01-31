import MobileNavigationItem from "./MobileNavigationItem";
export default function MobileNavbar({
  entityTitle,
  navigationLinks,
  navigationHrefs,
  cta,
  session,
}) {
  return (
    <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
      <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
        <div className="flex items-center mb-12">
          <a className="mr-auto text-2xl font-semibold leading-none" href="#">
            <img
              className="h-8"
              src="/logos/plain-indigo.svg"
              alt={`${entityTitle} logo`}
              width="auto"
            />
          </a>
          <button className="navbar-close">
            <svg
              className="h-6 w-6 cursor-pointer hover:text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div>
          <ul>
            {navigationLinks?.map((navName, index) => {
              try {
                const href = navigationHrefs[index];
                return (
                  <li className="mb-1" key={navName + `${index}`}>
                    <MobileNavigationItem href={href}>
                      {navName}
                    </MobileNavigationItem>
                  </li>
                );
              } catch {
                console.error(
                  `An error occured while loading the mobile navigation component. Please file a bug, thanks!`
                );
                return null;
              }
            })}
          </ul>
        </div>
        <div className="mt-auto">
          <div className="pt-6">
            <a
              className="block px-5 py-3 text-sm text-center font-semibold text-indigo-500 hover:text-white hover:bg-indigo-500 border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
              href="#"
            >
              {cta}
            </a>
          </div>
          <p className="mt-6 mb-4 text-sm text-center text-gray-500">
            <span>{`© ${entityTitle} 2022 All rights reserved.`}</span>
          </p>
        </div>
      </nav>
    </div>
  );
}
