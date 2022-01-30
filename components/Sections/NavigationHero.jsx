import Link from "next/link";

function MobileNavigationItem({ href, children }) {
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
function NavigationItem({ href, children }) {
  return (
    <Link href={href}>
      <a className="text-sm hover:text-indigo-700 font-medium" href={href}>
        {children}
      </a>
    </Link>
  );
}
function MobileNavbar({ entityTitle, navigationLinks, navigationHrefs, cta }) {
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
                  <li className="mb-1">
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
function Navbar({ entityTitle, navigationLinks, navigationHrefs, cta }) {
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
        {navigationLinks.map((navName, index) => {
          try {
            const href = navigationHrefs[index];
            return (
              <li>
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
function Hero({ heading, subHeading, cta1, cta2, imageSrc }) {
  return (
    <div className="flex flex-wrap items-center -mx-4 mt-10 lg:my-10 pb-10 lg:pb-16">
      <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
        <h2 className="max-w-sm mb-8 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
          {heading}
        </h2>
        <p className="max-w-lg mb-8 text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">
          {subHeading}
        </p>
        <div>
          <a
            className="block lg:inline-block px-5 py-3 lg:mr-3 mb-3 lg:mb-0 text-sm text-center bg-indigo-500 hover:bg-indigo-600 text-white font-semibold border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
            href="#"
          >
            {cta1}
          </a>
          <a
            className="block lg:inline-block px-5 py-3 text-sm text-center font-semibold text-indigo-500 hover:text-white hover:bg-indigo-500 border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
            href="#"
          >
            {cta2}
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-4">
        <img
          className="object-cover w-full rounded-xl"
          src={imageSrc || "/images/indigo-600-square.png"}
          alt="Hero image"
        />
      </div>
      <button className="block mt-10 lg:mt-20 mx-auto w-16 h-16 p-5 rounded-full bg-indigo-50 hover:bg-indigo-100">
        <svg
          className="mx-auto text-indigo-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
  );
}
export default function NavigationHero({
  entityTitle,
  navigationLinks,
  navigationHrefs,
  cta,
}) {
  return (
    <section id="navigation-hero">
      <div className="container px-4 mx-auto">
        <Navbar
          entityTitle={entityTitle}
          navigationLinks={navigationLinks}
          navigationHrefs={navigationHrefs}
          cta={cta}
        />
        <Hero
          heading="We're a different kind of online business."
          subHeading="We create value across the web via financially performant semi-autonomous brands centered around core technology."
          cta1="Learn about our raise"
          cta2="Sign in or up"
          imageSrc="https://res.cloudinary.com/tincre/image/upload/v1638892843/tincre.com/tincre-brand-indigo-800_uatfej.svg"
        />
      </div>
      <MobileNavbar
        entityTitle={entityTitle}
        navigationLinks={navigationLinks}
        navigationHrefs={navigationHrefs}
        cta={cta}
      />
    </section>
  );
}
