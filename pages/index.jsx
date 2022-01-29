function NavigationHero({ entityTitle }) {
  return (
    <section id="navigation-hero">
      <div className="container px-4 mx-auto">
        <nav className="flex justify-between items-center py-8">
          <a className="text-gray-700 text-2xl leading-none" href="#">
            <img
              className="h-8"
              src="/logos/plain-indigo.svg"
              alt={`The ${entityTitle} logo`}
              width="auto"
              height="2rem"
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
            <li>
              <a className="text-sm hover:text-indigo-700 font-medium" href="#">
                About
              </a>
            </li>
            <li>
              <a className="text-sm hover:text-indigo-700 font-medium" href="#">
                Company
              </a>
            </li>
            <li>
              <a className="text-sm hover:text-indigo-700 font-medium" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="text-sm hover:text-indigo-700 font-medium" href="#">
                Testimonials
              </a>
            </li>
          </ul>
          <a
            className="hidden lg:block px-5 py-3 text-sm font-semibold text-indigo-500 hover:text-white hover:bg-indigo-500 border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
            href="#"
          >
            Contact Us
          </a>
        </nav>
        <div className="flex flex-wrap items-center -mx-4 mt-10 lg:my-10 pb-10 lg:pb-16">
          <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
            <h2 className="max-w-sm mb-8 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
              Take care of your performance every day.
            </h2>
            <p className="max-w-lg mb-8 text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">
              Build a well-presented brand that everyone will love. Take care to
              develop resources continually and integrity them with previous
              projects.
            </p>
            <div>
              <a
                className="block lg:inline-block px-5 py-3 lg:mr-3 mb-3 lg:mb-0 text-sm text-center bg-indigo-500 hover:bg-indigo-600 text-white font-semibold border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
                href="#"
              >
                Track your performance
              </a>
              <a
                className="block lg:inline-block px-5 py-3 text-sm text-center font-semibold text-indigo-500 hover:text-white hover:bg-indigo-500 border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
                href="#"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <img
              className="object-cover w-full rounded-xl"
              src="/images/indigo-600-square.png"
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
      </div>
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
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded"
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded"
                  href="#"
                >
                  Company
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded"
                  href="#"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block px-5 py-3 text-sm text-center font-semibold text-indigo-500 hover:text-white hover:bg-indigo-500 border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
                href="#"
              >
                Contact Us
              </a>
            </div>
            <p className="mt-6 mb-4 text-sm text-center text-gray-500">
              <span>© 2022 All rights reserved.</span>
            </p>
          </div>
        </nav>
      </div>
    </section>
  );
}
function WhyInvest1({}) {
  return (
    <section id="why-invest-part-1" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-lg lg:mx-auto mb-10 lg:mb-0">
              <span className="text-xs font-semibold text-indigo-500 uppercase">
                Lorem ipsum
              </span>
              <h2 className="mt-2 mb-4 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
                Lorem ipsum dolor sit amet consectutar domor at elis
              </h2>
              <p className="mb-8 text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
                aliquet orci.
              </p>
              <a
                className="inline-block px-5 py-3 md:mr-3 mb-3 md:mb-0 text-sm bg-indigo-500 hover:bg-indigo-600 text-white font-semibold border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
                href="#"
              >
                Action
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex flex-wrap px-2 py-6 md:px-8 md:py-12 bg-gray-50 rounded-lg">
              <div className="w-full md:w-1/2 lg:w-full flex items-start flex-col lg:flex-row px-4 mb-8 lg:mb-6">
                <span className="mr-10 mb-4 lg:mb-0 flex-shrink-0 flex justify-center items-center w-12 h-12 rounded-full bg-indigo-500 text-indigo-50 font-bold font-heading">
                  1
                </span>
                <div className="max-w-xs">
                  <p className="text-lg text-gray-500 leading-loose">
                    Etiam pellentesque non nibh non pulvinar. Mauris posuere,
                    tellus sit amet tempus vestibulum.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-full flex items-start flex-col lg:flex-row px-4 mb-8 lg:mb-6">
                <span className="mr-10 mb-4 lg:mb-0 flex-shrink-0 flex justify-center items-center w-12 h-12 rounded-full bg-indigo-500 text-indigo-50 font-bold font-heading">
                  2
                </span>
                <div className="max-w-xs">
                  <p className="text-lg text-gray-500 leading-loose">
                    Etiam pellentesque non nibh non pulvinar. Mauris posuere,
                    tellus sit amet tempus vestibulum.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-full flex items-start flex-col lg:flex-row px-4">
                <span className="mr-10 mb-4 lg:mb-0 flex-shrink-0 flex justify-center items-center w-12 h-12 rounded-full bg-indigo-500 text-indigo-50 font-bold font-heading">
                  3
                </span>
                <div className="max-w-xs">
                  <p className="text-lg text-gray-500 leading-loose">
                    Etiam pellentesque non nibh non pulvinar. Mauris posuere,
                    tellus sit amet tempus vestibulum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function FactCards({}) {
  return (
    <section id="fact-cards" className="bg-indigo-500 py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="w-full lg:w-1/2 p-4">
            <div className="py-12 px-10 rounded-lg bg-white">
              <span className="mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500 text-indigo-50 font-bold font-heading">
                1
              </span>
              <h3 className="mb-4 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
                Suspendisse interdum ullamcorper elit, at consequat libero.
              </h3>
              <p className="text-lg text-gray-500 leading-loose">
                Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus
                sit amet tempus vestibulum, erat augue imperdiet.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <div className="py-12 px-10 rounded-lg bg-white">
              <span className="mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500 text-indigo-50 font-bold font-heading">
                2
              </span>
              <h3 className="mb-4 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
                Suspendisse interdum ullamcorper elit, at consequat libero.
              </h3>
              <p className="text-lg text-gray-500 leading-loose">
                Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus
                sit amet tempus vestibulum, erat augue imperdiet.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <div className="py-12 px-10 rounded-lg bg-white">
              <span className="mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500 text-indigo-50 font-bold font-heading">
                3
              </span>
              <h3 className="mb-4 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
                Suspendisse interdum ullamcorper elit, at consequat libero.
              </h3>
              <p className="text-lg text-gray-500 leading-loose">
                Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus
                sit amet tempus vestibulum, erat augue imperdiet.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <div className="py-12 px-10 rounded-lg bg-white">
              <span className="mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500 text-indigo-50 font-bold font-heading">
                4
              </span>
              <h3 className="mb-4 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
                Suspendisse interdum ullamcorper elit, at consequat libero.
              </h3>
              <p className="text-lg text-gray-500 leading-loose">
                Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus
                sit amet tempus vestibulum, erat augue imperdiet.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <div className="py-12 px-10 rounded-lg bg-white">
              <span className="mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500 text-indigo-50 font-bold font-heading">
                5
              </span>
              <h3 className="mb-4 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
                Suspendisse interdum ullamcorper elit, at consequat libero.
              </h3>
              <p className="text-lg text-gray-500 leading-loose">
                Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus
                sit amet tempus vestibulum, erat augue imperdiet.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <div className="py-12 px-10 rounded-lg bg-white">
              <span className="mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500 text-indigo-50 font-bold font-heading">
                6
              </span>
              <h3 className="mb-4 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
                Suspendisse interdum ullamcorper elit, at consequat libero.
              </h3>
              <p className="text-lg text-gray-500 leading-loose">
                Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus
                sit amet tempus vestibulum, erat augue imperdiet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Stats1({}) {
  return (
    <section id="stats-1" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4 -mb-8">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 text-center">
            <svg
              className="mx-auto mb-4 text-indigo-500"
              width={48}
              height={48}
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z"
                fill="currentColor"
              />
              <circle cx={24} cy={24} r="23.5" stroke="currentColor" />
            </svg>
            <h3 className="mb-2 text-2xl font-bold font-heading">
              600 000 000
            </h3>
            <p className="text-lg text-gray-500">Dolor sit amet consectutar</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 text-center">
            <svg
              className="mx-auto mb-4 text-indigo-500"
              width={48}
              height={48}
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z"
                fill="currentColor"
              />
              <circle cx={24} cy={24} r="23.5" stroke="currentColor" />
            </svg>
            <h3 className="mb-2 text-2xl font-bold font-heading">
              600 000 000
            </h3>
            <p className="text-lg text-gray-500">Dolor sit amet consectutar</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 text-center">
            <svg
              className="mx-auto mb-4 text-indigo-500"
              width={48}
              height={48}
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z"
                fill="currentColor"
              />
              <circle cx={24} cy={24} r="23.5" stroke="currentColor" />
            </svg>
            <h3 className="mb-2 text-2xl font-bold font-heading">
              600 000 000
            </h3>
            <p className="text-lg text-gray-500">Dolor sit amet consectutar</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 text-center">
            <svg
              className="mx-auto mb-4 text-indigo-500"
              width={48}
              height={48}
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z"
                fill="currentColor"
              />
              <circle cx={24} cy={24} r="23.5" stroke="currentColor" />
            </svg>
            <h3 className="mb-2 text-2xl font-bold font-heading">
              600 000 000
            </h3>
            <p className="text-lg text-gray-500">Dolor sit amet consectutar</p>
          </div>
        </div>
      </div>
    </section>
  );
}
function Stats2({}) {
  return (
    <section id="stats-2" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4 -mb-8">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 text-center">
            <div className="relative w-20 mx-auto mb-4">
              <div className="absolute inset-0 ml-2 flex items-center justify-center">
                <p className="text-lg font-bold text-gray-500">65 %</p>
              </div>
              <span className="relative block">
                <svg
                  width={69}
                  height={91}
                  viewBox="0 0 69 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M67.9865 79.0753C69.3577 81.148 68.7977 83.9622 66.5984 85.1196C61.1443 87.99 55.1436 89.717 48.9653 90.1747C41.2869 90.7435 33.5909 89.3326 26.6136 86.077C19.6362 82.8215 13.6109 77.8301 9.11396 71.5803C4.61701 65.3306 1.79884 58.0315 0.92903 50.3813C0.0592193 42.7311 1.16686 34.9857 4.146 27.8859C7.12514 20.7861 11.8761 14.5695 17.9445 9.83067C24.0129 5.09182 31.1957 1.98927 38.8058 0.819781C44.9292 -0.12122 51.1644 0.214628 57.1237 1.78733C59.5267 2.42151 60.7042 5.03807 59.8333 7.36576C58.9623 9.69345 56.3723 10.8445 53.9542 10.2706C49.4528 9.20231 44.7734 9.00838 40.1729 9.71535C34.0848 10.6509 28.3385 13.133 23.4838 16.9241C18.6291 20.7151 14.8283 25.6884 12.445 31.3683C10.0617 37.0481 9.17557 43.2444 9.87142 49.3646C10.5673 55.4847 12.8218 61.324 16.4194 66.3238C20.0169 71.3236 24.8372 75.3167 30.419 77.9212C36.0009 80.5256 42.1577 81.6543 48.3004 81.1993C52.9422 80.8554 57.4587 79.616 61.6053 77.5644C63.8329 76.4623 66.6152 77.0025 67.9865 79.0753Z"
                    fill="#F1F5FB"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 ml-3 block mx-auto">
                <svg
                  className="text-indigo-500"
                  width={80}
                  height={90}
                  viewBox="0 0 80 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35 4.5C35 2.01472 37.0197 -0.02331 39.4926 0.224807C45.6251 0.840118 51.5826 2.71056 56.988 5.73768C63.7057 9.49981 69.3458 14.9227 73.3688 21.4876C77.3918 28.0525 79.663 35.5398 79.9653 43.2333C80.2676 50.9268 78.5908 58.5693 75.0953 65.4296C71.5998 72.2899 66.4025 78.1385 60.0007 82.4161C53.5988 86.6937 46.2064 89.2572 38.5307 89.8613C30.8549 90.4654 23.1526 89.0899 16.1603 85.8664C10.5342 83.2728 5.51919 79.5524 1.4168 74.9528C-0.23745 73.098 0.224183 70.2661 2.23482 68.8053C4.24545 67.3445 7.04073 67.8135 8.74082 69.6263C11.9056 73.0009 15.7013 75.7445 19.9283 77.6932C25.522 80.2719 31.6839 81.3723 37.8245 80.889C43.9651 80.4057 49.879 78.355 55.0005 74.9329C60.122 71.5108 64.2798 66.8319 67.0762 61.3437C69.8726 55.8554 71.2141 49.7415 70.9722 43.5866C70.7304 37.4318 68.9134 31.442 65.695 26.1901C62.4767 20.9381 57.9646 16.5998 52.5904 13.5901C48.5293 11.3159 44.0787 9.85769 39.4884 9.28088C37.0225 8.97102 35 6.98528 35 4.5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
            <h3 className="mb-2 text-2xl font-bold font-heading">
              Market Size
            </h3>
            <p className="text-gray-500 text-lg">Dolor sit amet consectutar</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 text-center">
            <div className="relative w-20 mx-auto mb-4">
              <div className="absolute inset-0 ml-2 flex items-center justify-center">
                <p className="text-lg font-bold text-gray-500">65 %</p>
              </div>
              <span className="relative block">
                <svg
                  width={69}
                  height={91}
                  viewBox="0 0 69 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M67.9865 79.0753C69.3577 81.148 68.7977 83.9622 66.5984 85.1196C61.1443 87.99 55.1436 89.717 48.9653 90.1747C41.2869 90.7435 33.5909 89.3326 26.6136 86.077C19.6362 82.8215 13.6109 77.8301 9.11396 71.5803C4.61701 65.3306 1.79884 58.0315 0.92903 50.3813C0.0592193 42.7311 1.16686 34.9857 4.146 27.8859C7.12514 20.7861 11.8761 14.5695 17.9445 9.83067C24.0129 5.09182 31.1957 1.98927 38.8058 0.819781C44.9292 -0.12122 51.1644 0.214628 57.1237 1.78733C59.5267 2.42151 60.7042 5.03807 59.8333 7.36576C58.9623 9.69345 56.3723 10.8445 53.9542 10.2706C49.4528 9.20231 44.7734 9.00838 40.1729 9.71535C34.0848 10.6509 28.3385 13.133 23.4838 16.9241C18.6291 20.7151 14.8283 25.6884 12.445 31.3683C10.0617 37.0481 9.17557 43.2444 9.87142 49.3646C10.5673 55.4847 12.8218 61.324 16.4194 66.3238C20.0169 71.3236 24.8372 75.3167 30.419 77.9212C36.0009 80.5256 42.1577 81.6543 48.3004 81.1993C52.9422 80.8554 57.4587 79.616 61.6053 77.5644C63.8329 76.4623 66.6152 77.0025 67.9865 79.0753Z"
                    fill="#F1F5FB"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 ml-3 block mx-auto">
                <svg
                  className="text-indigo-500"
                  width={80}
                  height={90}
                  viewBox="0 0 80 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35 4.5C35 2.01472 37.0197 -0.02331 39.4926 0.224807C45.6251 0.840118 51.5826 2.71056 56.988 5.73768C63.7057 9.49981 69.3458 14.9227 73.3688 21.4876C77.3918 28.0525 79.663 35.5398 79.9653 43.2333C80.2676 50.9268 78.5908 58.5693 75.0953 65.4296C71.5998 72.2899 66.4025 78.1385 60.0007 82.4161C53.5988 86.6937 46.2064 89.2572 38.5307 89.8613C30.8549 90.4654 23.1526 89.0899 16.1603 85.8664C10.5342 83.2728 5.51919 79.5524 1.4168 74.9528C-0.23745 73.098 0.224183 70.2661 2.23482 68.8053C4.24545 67.3445 7.04073 67.8135 8.74082 69.6263C11.9056 73.0009 15.7013 75.7445 19.9283 77.6932C25.522 80.2719 31.6839 81.3723 37.8245 80.889C43.9651 80.4057 49.879 78.355 55.0005 74.9329C60.122 71.5108 64.2798 66.8319 67.0762 61.3437C69.8726 55.8554 71.2141 49.7415 70.9722 43.5866C70.7304 37.4318 68.9134 31.442 65.695 26.1901C62.4767 20.9381 57.9646 16.5998 52.5904 13.5901C48.5293 11.3159 44.0787 9.85769 39.4884 9.28088C37.0225 8.97102 35 6.98528 35 4.5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
            <h3 className="mb-2 text-2xl font-bold font-heading">
              Market Size
            </h3>
            <p className="text-gray-500 text-lg">Dolor sit amet consectutar</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 text-center">
            <div className="relative w-20 mx-auto mb-4">
              <div className="absolute inset-0 ml-2 flex items-center justify-center">
                <p className="text-lg font-bold text-gray-500">65 %</p>
              </div>
              <span className="relative block">
                <svg
                  width={69}
                  height={91}
                  viewBox="0 0 69 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M67.9865 79.0753C69.3577 81.148 68.7977 83.9622 66.5984 85.1196C61.1443 87.99 55.1436 89.717 48.9653 90.1747C41.2869 90.7435 33.5909 89.3326 26.6136 86.077C19.6362 82.8215 13.6109 77.8301 9.11396 71.5803C4.61701 65.3306 1.79884 58.0315 0.92903 50.3813C0.0592193 42.7311 1.16686 34.9857 4.146 27.8859C7.12514 20.7861 11.8761 14.5695 17.9445 9.83067C24.0129 5.09182 31.1957 1.98927 38.8058 0.819781C44.9292 -0.12122 51.1644 0.214628 57.1237 1.78733C59.5267 2.42151 60.7042 5.03807 59.8333 7.36576C58.9623 9.69345 56.3723 10.8445 53.9542 10.2706C49.4528 9.20231 44.7734 9.00838 40.1729 9.71535C34.0848 10.6509 28.3385 13.133 23.4838 16.9241C18.6291 20.7151 14.8283 25.6884 12.445 31.3683C10.0617 37.0481 9.17557 43.2444 9.87142 49.3646C10.5673 55.4847 12.8218 61.324 16.4194 66.3238C20.0169 71.3236 24.8372 75.3167 30.419 77.9212C36.0009 80.5256 42.1577 81.6543 48.3004 81.1993C52.9422 80.8554 57.4587 79.616 61.6053 77.5644C63.8329 76.4623 66.6152 77.0025 67.9865 79.0753Z"
                    fill="#F1F5FB"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 ml-3 block mx-auto">
                <svg
                  className="text-indigo-500"
                  width={80}
                  height={90}
                  viewBox="0 0 80 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35 4.5C35 2.01472 37.0197 -0.02331 39.4926 0.224807C45.6251 0.840118 51.5826 2.71056 56.988 5.73768C63.7057 9.49981 69.3458 14.9227 73.3688 21.4876C77.3918 28.0525 79.663 35.5398 79.9653 43.2333C80.2676 50.9268 78.5908 58.5693 75.0953 65.4296C71.5998 72.2899 66.4025 78.1385 60.0007 82.4161C53.5988 86.6937 46.2064 89.2572 38.5307 89.8613C30.8549 90.4654 23.1526 89.0899 16.1603 85.8664C10.5342 83.2728 5.51919 79.5524 1.4168 74.9528C-0.23745 73.098 0.224183 70.2661 2.23482 68.8053C4.24545 67.3445 7.04073 67.8135 8.74082 69.6263C11.9056 73.0009 15.7013 75.7445 19.9283 77.6932C25.522 80.2719 31.6839 81.3723 37.8245 80.889C43.9651 80.4057 49.879 78.355 55.0005 74.9329C60.122 71.5108 64.2798 66.8319 67.0762 61.3437C69.8726 55.8554 71.2141 49.7415 70.9722 43.5866C70.7304 37.4318 68.9134 31.442 65.695 26.1901C62.4767 20.9381 57.9646 16.5998 52.5904 13.5901C48.5293 11.3159 44.0787 9.85769 39.4884 9.28088C37.0225 8.97102 35 6.98528 35 4.5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
            <h3 className="mb-2 text-2xl font-bold font-heading">
              Market Size
            </h3>
            <p className="text-gray-500 text-lg">Dolor sit amet consectutar</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 text-center">
            <div className="relative w-20 mx-auto mb-4">
              <div className="absolute inset-0 ml-2 flex items-center justify-center">
                <p className="text-lg font-bold text-gray-500">65 %</p>
              </div>
              <span className="relative block">
                <svg
                  width={69}
                  height={91}
                  viewBox="0 0 69 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M67.9865 79.0753C69.3577 81.148 68.7977 83.9622 66.5984 85.1196C61.1443 87.99 55.1436 89.717 48.9653 90.1747C41.2869 90.7435 33.5909 89.3326 26.6136 86.077C19.6362 82.8215 13.6109 77.8301 9.11396 71.5803C4.61701 65.3306 1.79884 58.0315 0.92903 50.3813C0.0592193 42.7311 1.16686 34.9857 4.146 27.8859C7.12514 20.7861 11.8761 14.5695 17.9445 9.83067C24.0129 5.09182 31.1957 1.98927 38.8058 0.819781C44.9292 -0.12122 51.1644 0.214628 57.1237 1.78733C59.5267 2.42151 60.7042 5.03807 59.8333 7.36576C58.9623 9.69345 56.3723 10.8445 53.9542 10.2706C49.4528 9.20231 44.7734 9.00838 40.1729 9.71535C34.0848 10.6509 28.3385 13.133 23.4838 16.9241C18.6291 20.7151 14.8283 25.6884 12.445 31.3683C10.0617 37.0481 9.17557 43.2444 9.87142 49.3646C10.5673 55.4847 12.8218 61.324 16.4194 66.3238C20.0169 71.3236 24.8372 75.3167 30.419 77.9212C36.0009 80.5256 42.1577 81.6543 48.3004 81.1993C52.9422 80.8554 57.4587 79.616 61.6053 77.5644C63.8329 76.4623 66.6152 77.0025 67.9865 79.0753Z"
                    fill="#F1F5FB"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 ml-3 block mx-auto">
                <svg
                  className="text-indigo-500"
                  width={80}
                  height={90}
                  viewBox="0 0 80 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35 4.5C35 2.01472 37.0197 -0.02331 39.4926 0.224807C45.6251 0.840118 51.5826 2.71056 56.988 5.73768C63.7057 9.49981 69.3458 14.9227 73.3688 21.4876C77.3918 28.0525 79.663 35.5398 79.9653 43.2333C80.2676 50.9268 78.5908 58.5693 75.0953 65.4296C71.5998 72.2899 66.4025 78.1385 60.0007 82.4161C53.5988 86.6937 46.2064 89.2572 38.5307 89.8613C30.8549 90.4654 23.1526 89.0899 16.1603 85.8664C10.5342 83.2728 5.51919 79.5524 1.4168 74.9528C-0.23745 73.098 0.224183 70.2661 2.23482 68.8053C4.24545 67.3445 7.04073 67.8135 8.74082 69.6263C11.9056 73.0009 15.7013 75.7445 19.9283 77.6932C25.522 80.2719 31.6839 81.3723 37.8245 80.889C43.9651 80.4057 49.879 78.355 55.0005 74.9329C60.122 71.5108 64.2798 66.8319 67.0762 61.3437C69.8726 55.8554 71.2141 49.7415 70.9722 43.5866C70.7304 37.4318 68.9134 31.442 65.695 26.1901C62.4767 20.9381 57.9646 16.5998 52.5904 13.5901C48.5293 11.3159 44.0787 9.85769 39.4884 9.28088C37.0225 8.97102 35 6.98528 35 4.5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
            <h3 className="mb-2 text-2xl font-bold font-heading">
              Market Size
            </h3>
            <p className="text-gray-500 text-lg">Dolor sit amet consectutar</p>
          </div>
        </div>
      </div>
    </section>
  );
}
function WhyInvest2({}) {
  return (
    <section id="why-invest-part-2" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl lg:max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold text-indigo-500 uppercase">
            New Feature
          </span>
          <h2 className="mt-2 mb-4 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
            Take quick action that increases your brand's regular profit.
          </h2>
          <p className="mb-8 text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">
            If you have ever wondeindigo how to develop your brand, this is the
            place for you. Take a&nbsp;big step forward in growing your business
            with this great tool.
          </p>
          <div>
            <a
              className="block md:inline-block px-5 py-3 md:mr-3 mb-3 md:mb-0 text-sm bg-indigo-500 hover:bg-indigo-600 text-white font-semibold border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
              href="#"
            >
              Try Demo
            </a>
            <a
              className="block md:inline-block px-5 py-3 text-sm font-semibold text-indigo-500 hover:text-white hover:bg-indigo-500 border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
              href="#"
            >
              Share with your friends
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
function FactSnippets({}) {
  return (
    <section id="fact-snippets" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 lg:mb-16 text-center">
          <span className="text-sm text-indigo-500 font-bold uppercase">
            Lorem ipsum
          </span>
          <h2 className="mt-2 mb-4 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
            Lorem ipsum dolor sit amet consectutar domor at elis
          </h2>
          <p className="text-lg text-gray-500 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
            aliquet orci.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-around -m-4">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-8 text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                dignissim quam ultricies, placerat tellus sed, laoreet orci.
                Duis luctus quam ac metus gravida sodales. Sed a ex accumsan,
                pellentesque sem eget, scelerisque dolor.
              </p>
              <img
                className="mb-2 h-12 w-12 object-cover rounded-full"
                src="/images/indigo-500-avatar.png"
                alt="Avatar image"
              />
              <p className="text-2xl font-bold font-heading">Danny Bailey</p>
              <p className="text-lg text-gray-400">CEO &amp; Founder</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-8 text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                dignissim quam ultricies, placerat tellus sed, laoreet orci.
                Duis luctus quam ac metus gravida sodales. Sed a ex accumsan,
                pellentesque sem eget, scelerisque dolor.
              </p>
              <img
                className="mb-2 h-12 w-12 object-cover rounded-full"
                src="/images/indigo-500-avatar.png"
                alt="Avatar image"
              />
              <p className="text-2xl font-bold font-heading">Danny Bailey</p>
              <p className="text-lg text-gray-400">CEO &amp; Founder</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-8 text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                dignissim quam ultricies, placerat tellus sed, laoreet orci.
                Duis luctus quam ac metus gravida sodales. Sed a ex accumsan,
                pellentesque sem eget, scelerisque dolor.
              </p>
              <img
                className="mb-2 h-12 w-12 object-cover rounded-full"
                src="/images/indigo-500-avatar.png"
                alt="Avatar image"
              />
              <p className="text-2xl font-bold font-heading">Danny Bailey</p>
              <p className="text-lg text-gray-400">CEO &amp; Founder</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-8 text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                dignissim quam ultricies, placerat tellus sed, laoreet orci.
                Duis luctus quam ac metus gravida sodales. Sed a ex accumsan,
                pellentesque sem eget, scelerisque dolor.
              </p>
              <img
                className="mb-2 h-12 w-12 object-cover rounded-full"
                src="/images/indigo-500-avatar.png"
                alt=""
              />
              <p className="text-2xl font-bold font-heading">Danny Bailey</p>
              <p className="text-lg text-gray-400">CEO &amp; Founder</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-8 text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                dignissim quam ultricies, placerat tellus sed, laoreet orci.
                Duis luctus quam ac metus gravida sodales. Sed a ex accumsan,
                pellentesque sem eget, scelerisque dolor.
              </p>
              <img
                className="mb-2 h-12 w-12 object-cover rounded-full"
                src="/images/indigo-500-avatar.png"
                alt="Avatar image"
              />
              <p className="text-2xl font-bold font-heading">Danny Bailey</p>
              <p className="text-lg text-gray-400">CEO &amp; Founder</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-8 text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                dignissim quam ultricies, placerat tellus sed, laoreet orci.
                Duis luctus quam ac metus gravida sodales. Sed a ex accumsan,
                pellentesque sem eget, scelerisque dolor.
              </p>
              <img
                className="mb-2 h-12 w-12 object-cover rounded-full"
                src="/images/indigo-500-avatar.png"
                alt="Avatar image"
              />
              <p className="text-2xl font-bold font-heading">Danny Bailey</p>
              <p className="text-lg text-gray-400">CEO &amp; Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function InfoCarousel({}) {
  return (
    <section id="info-carousel" className="py-20 bg-indigo-500">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center">
          <button className="hidden lg:block w-16 h-16 p-5 rounded-full bg-indigo-50 hover:bg-white transition duration-200">
            <svg
              className="text-indigo-500 hover:text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="max-w-2xl mb-14 mx-auto text-center">
            <h2 className="mb-4 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading text-white">
              Expand your brand with this excellent extension tool.
            </h2>
            <p className="mb-8 text-base leading-relaxed lg:text-xl lg:leading-relaxed text-indigo-50">
              A short message that will bring your customers into the world of
              your imagination. And will allow them to become more familiar with
              your brand.
            </p>
            <a
              className="inline-block px-5 py-3 text-sm bg-white hover:bg-indigo-50 text-indigo-500 font-semibold border border-white rounded transition duration-200"
              href="#"
            >
              Try Demo
            </a>
          </div>
          <button className="hidden lg:block w-16 h-16 p-5 rounded-full bg-indigo-50 hover:bg-white transition duration-200">
            <svg
              className="text-indigo-500 hover:text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <div className="w-full text-center">
            <button className="w-3 h-3 mr-2 rounded-full border border-indigo-50 bg-indigo-50" />
            <button className="w-3 h-3 mr-2 rounded-full border border-indigo-50" />
            <button className="w-3 h-3 mr-2 rounded-full border border-indigo-50" />
            <button className="w-3 h-3 rounded-full border border-indigo-50" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Considerations({}) {
  return (
    <section id="considerations" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold font-heading">
            Decisions To Consider Before Wireframing
          </h2>
          <ul>
            <li className="mb-8">
              <button className="group w-full flex justify-between items-center text-left font-bold font-heading">
                <span className="hover:text-indigo-500 text-lg font-bold font-heading">
                  Donec sed leo sit amet ante ornare laoreet in quis est?
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-2 text-indigo-500"
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
              <p className="hidden mt-2 text-lg text-gray-500 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                quis ultricies est. Duis nec hendrerit magna. Ut vel orci
                gravida, hendrerit enim non, gravida turpis. Praesent non lectus
                porttitor, scelerisque nulla nec, ornare neque. Integer massa
                libero, ornare ut leo nec, scelerisque rutrum elit. Morbi et
                massa id ipsum lobortis rhoncus. Aenean sit amet porta nulla,
                quis varius risus. Suspendisse ultrices ut lectus non laoreet.
                Etiam ornare laoreet tortor quis porttitor. Suspendisse tempus
                erat non dui volutpat eleifend.
              </p>
            </li>
            <li className="mb-8">
              <button className="group w-full flex justify-between items-center text-left font-bold font-heading">
                <span className="hover:text-indigo-500 text-lg font-bold font-heading">
                  Fusce eget nunc et libero accumsan rutrum quis nec lectus?
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-2 text-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
              <p className="mt-2 text-lg text-gray-500 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                euismod orci sed tristique placerat. Fusce in ligula urna. Fusce
                eget nunc et libero accumsan rutrum quis nec lectus. Quisque
                luctus sem nibh, quis ornare neque consectetur varius. Maecenas
                rhoncus consectetur rutrum.
              </p>
            </li>
            <li className="mb-8">
              <button className="group w-full flex justify-between items-center text-left font-bold font-heading">
                <span className="hover:text-indigo-500 text-lg font-bold font-heading">
                  Mauris vitae ex ut lectus cursus ornare?
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-2 text-indigo-500"
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
              <p className="hidden mt-2 text-lg text-gray-500 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                quis ultricies est. Duis nec hendrerit magna. Ut vel orci
                gravida, hendrerit enim non, gravida turpis. Praesent non lectus
                porttitor, scelerisque nulla nec, ornare neque. Integer massa
                libero, ornare ut leo nec, scelerisque rutrum elit. Morbi et
                massa id ipsum lobortis rhoncus. Aenean sit amet porta nulla,
                quis varius risus. Suspendisse ultrices ut lectus non laoreet.
                Etiam ornare laoreet tortor quis porttitor. Suspendisse tempus
                erat non dui volutpat eleifend.
              </p>
            </li>
            <li className="mb-8">
              <button className="group w-full flex justify-between items-center text-left">
                <span className="hover:text-indigo-500 text-lg font-bold font-heading">
                  Nam consequat, augue sed rutrum faucibus?
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-2 text-indigo-500"
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
              <p className="hidden mt-2 text-lg text-gray-500 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                euismod orci sed tristique placerat. Fusce in ligula urna. Fusce
                eget nunc et libero accumsan rutrum quis nec lectus. Quisque
                luctus sem nibh, quis ornare neque consectetur varius. Maecenas
                rhoncus consectetur rutrum.
              </p>
            </li>
            <li className="mb-8">
              <button className="group w-full flex justify-between items-center text-left">
                <span className="hover:text-indigo-500 text-lg font-bold font-heading">
                  Cras at ante non ligula pharetra elementum?
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-2 text-indigo-500"
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
              <p className="hidden mt-2 text-lg text-gray-500 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                euismod orci sed tristique placerat. Fusce in ligula urna. Fusce
                eget nunc et libero accumsan rutrum quis nec lectus. Quisque
                luctus sem nibh, quis ornare neque consectetur varius. Maecenas
                rhoncus consectetur rutrum.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Team({}) {
  return (
    <section id="team" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-lg lg:max-w-2xl mx-auto text-center mb-12 lg:mb-16">
          <span className="text-xs font-semibold text-indigo-500 uppercase">
            Lorem ipsum
          </span>
          <h2 className="mt-2 mb-4 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
            Lorem ipsum dolor sit amet consectutar domor at elis
          </h2>
          <p className="text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
            aliquet orci.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="w-full lg:w-1/2 p-4">
            <div className="bg-gray-50 p-6 rounded">
              <div className="flex flex-wrap items-center -mx-4">
                <div className="w-full md:w-2/5 px-4 mb-4 lg:mb-0">
                  <img
                    className="md:w-full h-52 object-cover rounded-lg"
                    src="/images/indigo-600-square.png"
                    alt="Avatar image"
                  />
                </div>
                <div className="w-full md:w-3/5 px-4">
                  <h3 className="text-2xl font-bold font-heading mb-1">
                    Danny Bailey
                  </h3>
                  <p className="mb-2 text-lg text-gray-400">
                    CEO &amp; Founder
                  </p>
                  <p className="text-lg text-gray-500 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque massa nibh.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <div className="bg-gray-50 p-6 rounded">
              <div className="flex flex-wrap items-center -mx-4">
                <div className="w-full md:w-2/5 px-4 mb-4 lg:mb-0">
                  <img
                    className="md:w-full h-52 object-cover rounded-lg"
                    src="/images/indigo-600-square.png"
                    alt="Avatar image"
                  />
                </div>
                <div className="w-full md:w-3/5 px-4">
                  <h3 className="text-2xl font-bold font-heading mb-1">
                    Danny Bailey
                  </h3>
                  <p className="mb-2 text-lg text-gray-400">
                    CEO &amp; Founder
                  </p>
                  <p className="text-lg text-gray-500 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque massa nibh.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <div className="bg-gray-50 p-6 rounded">
              <div className="flex flex-wrap items-center -mx-4">
                <div className="w-full md:w-2/5 px-4 mb-4 lg:mb-0">
                  <img
                    className="md:w-full h-52 object-cover rounded-lg"
                    src="/images/indigo-600-square.png"
                    alt="Avatar image"
                  />
                </div>
                <div className="w-full md:w-3/5 px-4">
                  <h3 className="text-2xl font-bold font-heading mb-1">
                    Danny Bailey
                  </h3>
                  <p className="mb-2 text-lg text-gray-400">
                    CEO &amp; Founder
                  </p>
                  <p className="text-lg text-gray-500 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque massa nibh.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <div className="bg-gray-50 p-6 rounded">
              <div className="flex flex-wrap items-center -mx-4">
                <div className="w-full md:w-2/5 px-4 mb-4 lg:mb-0">
                  <img
                    className="md:w-full h-52 object-cover rounded-lg"
                    src="/images/indigo-600-square.png"
                    alt="Avatar image"
                  />
                </div>
                <div className="w-full md:w-3/5 px-4">
                  <h3 className="text-2xl font-bold font-heading mb-1">
                    Danny Bailey
                  </h3>
                  <p className="mb-2 text-lg text-gray-400">
                    CEO &amp; Founder
                  </p>
                  <p className="text-lg text-gray-500 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque massa nibh.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function FAQ({}) {
  return (
    <section id="faq" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold text-indigo-500 uppercase">
            Lorem ipsum
          </span>
          <h2 className="mt-2 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="flex flex-wrap -mx-4 -mb-8">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
            <div>
              <span className="mr-6 mb-6 flex items-center justify-center w-16 h-16 p-3 bg-indigo-500 rounded-full">
                <svg
                  className="text-gray-50"
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.1332 14.5333C18.2665 14.6667 18.3998 14.6667 18.6665 14.6667H27.9998C28.7998 14.6667 29.3332 14.1333 29.3332 13.3333C29.3332 13.0667 29.3332 12.9333 29.1998 12.8L24.5332 3.46667C24.1332 2.8 23.3332 2.53334 22.6665 2.93334C22.5332 3.06667 22.2665 3.2 22.1332 3.46667L17.4665 12.8C17.1998 13.3333 17.4665 14.1333 18.1332 14.5333ZM23.3332 6.93334L25.8665 12H20.7998L23.3332 6.93334ZM8.6665 2.66667C5.33317 2.66667 2.6665 5.33334 2.6665 8.66667C2.6665 12 5.33317 14.6667 8.6665 14.6667C11.9998 14.6667 14.6665 12 14.6665 8.66667C14.6665 5.33334 11.9998 2.66667 8.6665 2.66667ZM8.6665 12C6.79984 12 5.33317 10.5333 5.33317 8.66667C5.33317 6.80001 6.79984 5.33334 8.6665 5.33334C10.5332 5.33334 11.9998 6.80001 11.9998 8.66667C11.9998 10.5333 10.5332 12 8.6665 12ZM14.2665 17.7333C13.7332 17.2 12.9332 17.2 12.3998 17.7333L8.6665 21.4667L4.93317 17.7333C4.39984 17.2 3.59984 17.2 3.0665 17.7333C2.53317 18.2667 2.53317 19.0667 3.0665 19.6L6.79984 23.3333L3.0665 27.0667C2.53317 27.6 2.53317 28.4 3.0665 28.9333C3.59984 29.4667 4.39984 29.4667 4.93317 28.9333L8.6665 25.2L12.3998 28.9333C12.9332 29.4667 13.7332 29.4667 14.2665 28.9333C14.7998 28.4 14.7998 27.6 14.2665 27.0667L10.5332 23.3333L14.2665 19.6C14.7998 19.0667 14.7998 18.2667 14.2665 17.7333ZM27.9998 17.3333H18.6665C17.8665 17.3333 17.3332 17.8667 17.3332 18.6667V28C17.3332 28.8 17.8665 29.3333 18.6665 29.3333H27.9998C28.7998 29.3333 29.3332 28.8 29.3332 28V18.6667C29.3332 17.8667 28.7998 17.3333 27.9998 17.3333ZM26.6665 26.6667H19.9998V20H26.6665V26.6667Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <h3 className="mb-2 text-lg lg:text-2xl font-bold font-heading">
                Neque porro quisquam est
              </h3>
              <ul className="list-inside list-disc leading-loose text-gray-500">
                <li className="text-indigo-500">
                  <a className="text-gray-500 hover:underline" href="#">
                    Etiam pellentesque non nibh
                  </a>
                </li>
                <li className="text-indigo-500">
                  <a className="text-gray-500 hover:underline" href="#">
                    Mauris posuere
                  </a>
                </li>
                <li className="text-indigo-500">
                  <a className="text-gray-500 hover:underline" href="#">
                    Tellus sit amet tempus vestibulum
                  </a>
                </li>
                <li className="text-indigo-500">
                  <a className="text-gray-500 hover:underline" href="#">
                    Erat augue imperdiet neque
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
            <div>
              <span className="mr-6 mb-6 flex items-center justify-center w-16 h-16 p-3 bg-indigo-500 rounded-full">
                <svg
                  className="text-gray-50"
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.1332 14.5333C18.2665 14.6667 18.3998 14.6667 18.6665 14.6667H27.9998C28.7998 14.6667 29.3332 14.1333 29.3332 13.3333C29.3332 13.0667 29.3332 12.9333 29.1998 12.8L24.5332 3.46667C24.1332 2.8 23.3332 2.53334 22.6665 2.93334C22.5332 3.06667 22.2665 3.2 22.1332 3.46667L17.4665 12.8C17.1998 13.3333 17.4665 14.1333 18.1332 14.5333ZM23.3332 6.93334L25.8665 12H20.7998L23.3332 6.93334ZM8.6665 2.66667C5.33317 2.66667 2.6665 5.33334 2.6665 8.66667C2.6665 12 5.33317 14.6667 8.6665 14.6667C11.9998 14.6667 14.6665 12 14.6665 8.66667C14.6665 5.33334 11.9998 2.66667 8.6665 2.66667ZM8.6665 12C6.79984 12 5.33317 10.5333 5.33317 8.66667C5.33317 6.80001 6.79984 5.33334 8.6665 5.33334C10.5332 5.33334 11.9998 6.80001 11.9998 8.66667C11.9998 10.5333 10.5332 12 8.6665 12ZM14.2665 17.7333C13.7332 17.2 12.9332 17.2 12.3998 17.7333L8.6665 21.4667L4.93317 17.7333C4.39984 17.2 3.59984 17.2 3.0665 17.7333C2.53317 18.2667 2.53317 19.0667 3.0665 19.6L6.79984 23.3333L3.0665 27.0667C2.53317 27.6 2.53317 28.4 3.0665 28.9333C3.59984 29.4667 4.39984 29.4667 4.93317 28.9333L8.6665 25.2L12.3998 28.9333C12.9332 29.4667 13.7332 29.4667 14.2665 28.9333C14.7998 28.4 14.7998 27.6 14.2665 27.0667L10.5332 23.3333L14.2665 19.6C14.7998 19.0667 14.7998 18.2667 14.2665 17.7333ZM27.9998 17.3333H18.6665C17.8665 17.3333 17.3332 17.8667 17.3332 18.6667V28C17.3332 28.8 17.8665 29.3333 18.6665 29.3333H27.9998C28.7998 29.3333 29.3332 28.8 29.3332 28V18.6667C29.3332 17.8667 28.7998 17.3333 27.9998 17.3333ZM26.6665 26.6667H19.9998V20H26.6665V26.6667Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <h3 className="mb-2 text-lg lg:text-2xl font-bold font-heading">
                Neque porro quisquam est
              </h3>
              <ul className="list-inside list-disc leading-loose text-gray-500">
                <li className="text-indigo-500">
                  <a className="text-gray-500 hover:underline" href="#">
                    Etiam pellentesque non nibh
                  </a>
                </li>
                <li className="text-indigo-500">
                  <a className="text-gray-500 hover:underline" href="#">
                    Mauris posuere
                  </a>
                </li>
                <li className="text-indigo-500">
                  <a className="text-gray-500 hover:underline" href="#">
                    Tellus sit amet tempus vestibulum
                  </a>
                </li>
                <li className="text-indigo-500">
                  <a className="text-gray-500 hover:underline" href="#">
                    Erat augue imperdiet neque
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
            <div>
              <span className="mr-6 mb-6 flex items-center justify-center w-16 h-16 p-3 bg-indigo-500 rounded-full">
                <svg
                  className="text-gray-50"
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.1332 14.5333C18.2665 14.6667 18.3998 14.6667 18.6665 14.6667H27.9998C28.7998 14.6667 29.3332 14.1333 29.3332 13.3333C29.3332 13.0667 29.3332 12.9333 29.1998 12.8L24.5332 3.46667C24.1332 2.8 23.3332 2.53334 22.6665 2.93334C22.5332 3.06667 22.2665 3.2 22.1332 3.46667L17.4665 12.8C17.1998 13.3333 17.4665 14.1333 18.1332 14.5333ZM23.3332 6.93334L25.8665 12H20.7998L23.3332 6.93334ZM8.6665 2.66667C5.33317 2.66667 2.6665 5.33334 2.6665 8.66667C2.6665 12 5.33317 14.6667 8.6665 14.6667C11.9998 14.6667 14.6665 12 14.6665 8.66667C14.6665 5.33334 11.9998 2.66667 8.6665 2.66667ZM8.6665 12C6.79984 12 5.33317 10.5333 5.33317 8.66667C5.33317 6.80001 6.79984 5.33334 8.6665 5.33334C10.5332 5.33334 11.9998 6.80001 11.9998 8.66667C11.9998 10.5333 10.5332 12 8.6665 12ZM14.2665 17.7333C13.7332 17.2 12.9332 17.2 12.3998 17.7333L8.6665 21.4667L4.93317 17.7333C4.39984 17.2 3.59984 17.2 3.0665 17.7333C2.53317 18.2667 2.53317 19.0667 3.0665 19.6L6.79984 23.3333L3.0665 27.0667C2.53317 27.6 2.53317 28.4 3.0665 28.9333C3.59984 29.4667 4.39984 29.4667 4.93317 28.9333L8.6665 25.2L12.3998 28.9333C12.9332 29.4667 13.7332 29.4667 14.2665 28.9333C14.7998 28.4 14.7998 27.6 14.2665 27.0667L10.5332 23.3333L14.2665 19.6C14.7998 19.0667 14.7998 18.2667 14.2665 17.7333ZM27.9998 17.3333H18.6665C17.8665 17.3333 17.3332 17.8667 17.3332 18.6667V28C17.3332 28.8 17.8665 29.3333 18.6665 29.3333H27.9998C28.7998 29.3333 29.3332 28.8 29.3332 28V18.6667C29.3332 17.8667 28.7998 17.3333 27.9998 17.3333ZM26.6665 26.6667H19.9998V20H26.6665V26.6667Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <h3 className="mb-2 text-lg lg:text-2xl font-bold font-heading">
                Neque porro quisquam est
              </h3>
              <ul className="list-inside list-disc leading-loose text-gray-500">
                <li className="text-indigo-500">
                  <a className="text-gray-500 hover:underline" href="#">
                    Etiam pellentesque non nibh
                  </a>
                </li>
                <li className="text-indigo-500">
                  <a className="text-gray-500 hover:underline" href="#">
                    Mauris posuere
                  </a>
                </li>
                <li className="text-indigo-500">
                  <a className="text-gray-500 hover:underline" href="#">
                    Tellus sit amet tempus vestibulum
                  </a>
                </li>
                <li className="text-indigo-500">
                  <a className="text-gray-500 hover:underline" href="#">
                    Erat augue imperdiet neque
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
            <div>
              <span className="mr-6 mb-6 flex items-center justify-center w-16 h-16 p-3 bg-indigo-500 rounded-full">
                <svg
                  className="text-gray-50"
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.1332 14.5333C18.2665 14.6667 18.3998 14.6667 18.6665 14.6667H27.9998C28.7998 14.6667 29.3332 14.1333 29.3332 13.3333C29.3332 13.0667 29.3332 12.9333 29.1998 12.8L24.5332 3.46667C24.1332 2.8 23.3332 2.53334 22.6665 2.93334C22.5332 3.06667 22.2665 3.2 22.1332 3.46667L17.4665 12.8C17.1998 13.3333 17.4665 14.1333 18.1332 14.5333ZM23.3332 6.93334L25.8665 12H20.7998L23.3332 6.93334ZM8.6665 2.66667C5.33317 2.66667 2.6665 5.33334 2.6665 8.66667C2.6665 12 5.33317 14.6667 8.6665 14.6667C11.9998 14.6667 14.6665 12 14.6665 8.66667C14.6665 5.33334 11.9998 2.66667 8.6665 2.66667ZM8.6665 12C6.79984 12 5.33317 10.5333 5.33317 8.66667C5.33317 6.80001 6.79984 5.33334 8.6665 5.33334C10.5332 5.33334 11.9998 6.80001 11.9998 8.66667C11.9998 10.5333 10.5332 12 8.6665 12ZM14.2665 17.7333C13.7332 17.2 12.9332 17.2 12.3998 17.7333L8.6665 21.4667L4.93317 17.7333C4.39984 17.2 3.59984 17.2 3.0665 17.7333C2.53317 18.2667 2.53317 19.0667 3.0665 19.6L6.79984 23.3333L3.0665 27.0667C2.53317 27.6 2.53317 28.4 3.0665 28.9333C3.59984 29.4667 4.39984 29.4667 4.93317 28.9333L8.6665 25.2L12.3998 28.9333C12.9332 29.4667 13.7332 29.4667 14.2665 28.9333C14.7998 28.4 14.7998 27.6 14.2665 27.0667L10.5332 23.3333L14.2665 19.6C14.7998 19.0667 14.7998 18.2667 14.2665 17.7333ZM27.9998 17.3333H18.6665C17.8665 17.3333 17.3332 17.8667 17.3332 18.6667V28C17.3332 28.8 17.8665 29.3333 18.6665 29.3333H27.9998C28.7998 29.3333 29.3332 28.8 29.3332 28V18.6667C29.3332 17.8667 28.7998 17.3333 27.9998 17.3333ZM26.6665 26.6667H19.9998V20H26.6665V26.6667Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <h3 className="mb-2 text-lg lg:text-2xl font-bold font-heading">
                Neque porro quisquam est
              </h3>
              <ul className="list-inside list-disc leading-loose text-gray-500">
                <li className="text-indigo-500">
                  <a className="text-gray-500 hover:underline" href="#">
                    Etiam pellentesque non nibh
                  </a>
                </li>
                <li className="text-indigo-500">
                  <a className="text-gray-500 hover:underline" href="#">
                    Mauris posuere
                  </a>
                </li>
                <li className="text-indigo-500">
                  <a className="text-gray-500 hover:underline" href="#">
                    Tellus sit amet tempus vestibulum
                  </a>
                </li>
                <li className="text-indigo-500">
                  <a className="text-gray-500 hover:underline" href="#">
                    Erat augue imperdiet neque
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
            <div>
              <span className="mr-6 mb-6 flex items-center justify-center w-16 h-16 p-3 bg-indigo-500 rounded-full">
                <svg
                  className="text-gray-50"
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.1332 14.5333C18.2665 14.6667 18.3998 14.6667 18.6665 14.6667H27.9998C28.7998 14.6667 29.3332 14.1333 29.3332 13.3333C29.3332 13.0667 29.3332 12.9333 29.1998 12.8L24.5332 3.46667C24.1332 2.8 23.3332 2.53334 22.6665 2.93334C22.5332 3.06667 22.2665 3.2 22.1332 3.46667L17.4665 12.8C17.1998 13.3333 17.4665 14.1333 18.1332 14.5333ZM23.3332 6.93334L25.8665 12H20.7998L23.3332 6.93334ZM8.6665 2.66667C5.33317 2.66667 2.6665 5.33334 2.6665 8.66667C2.6665 12 5.33317 14.6667 8.6665 14.6667C11.9998 14.6667 14.6665 12 14.6665 8.66667C14.6665 5.33334 11.9998 2.66667 8.6665 2.66667ZM8.6665 12C6.79984 12 5.33317 10.5333 5.33317 8.66667C5.33317 6.80001 6.79984 5.33334 8.6665 5.33334C10.5332 5.33334 11.9998 6.80001 11.9998 8.66667C11.9998 10.5333 10.5332 12 8.6665 12ZM14.2665 17.7333C13.7332 17.2 12.9332 17.2 12.3998 17.7333L8.6665 21.4667L4.93317 17.7333C4.39984 17.2 3.59984 17.2 3.0665 17.7333C2.53317 18.2667 2.53317 19.0667 3.0665 19.6L6.79984 23.3333L3.0665 27.0667C2.53317 27.6 2.53317 28.4 3.0665 28.9333C3.59984 29.4667 4.39984 29.4667 4.93317 28.9333L8.6665 25.2L12.3998 28.9333C12.9332 29.4667 13.7332 29.4667 14.2665 28.9333C14.7998 28.4 14.7998 27.6 14.2665 27.0667L10.5332 23.3333L14.2665 19.6C14.7998 19.0667 14.7998 18.2667 14.2665 17.7333ZM27.9998 17.3333H18.6665C17.8665 17.3333 17.3332 17.8667 17.3332 18.6667V28C17.3332 28.8 17.8665 29.3333 18.6665 29.3333H27.9998C28.7998 29.3333 29.3332 28.8 29.3332 28V18.6667C29.3332 17.8667 28.7998 17.3333 27.9998 17.3333ZM26.6665 26.6667H19.9998V20H26.6665V26.6667Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <h3 className="mb-2 text-lg lg:text-2xl font-bold font-heading">
                Neque porro quisquam est
              </h3>
              <ul className="list-inside list-disc leading-loose text-gray-500">
                <li className="text-indigo-500">
                  <a className="text-gray-500 hover:underline" href="#">
                    Etiam pellentesque non nibh
                  </a>
                </li>
                <li className="text-indigo-500">
                  <a className="text-gray-500 hover:underline" href="#">
                    Mauris posuere
                  </a>
                </li>
                <li className="text-indigo-500">
                  <a className="text-gray-500 hover:underline" href="#">
                    Tellus sit amet tempus vestibulum
                  </a>
                </li>
                <li className="text-indigo-500">
                  <a className="text-gray-500 hover:underline" href="#">
                    Erat augue imperdiet neque
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
            <div>
              <span className="mr-6 mb-6 flex items-center justify-center w-16 h-16 p-3 bg-indigo-500 rounded-full">
                <svg
                  className="text-gray-50"
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.1332 14.5333C18.2665 14.6667 18.3998 14.6667 18.6665 14.6667H27.9998C28.7998 14.6667 29.3332 14.1333 29.3332 13.3333C29.3332 13.0667 29.3332 12.9333 29.1998 12.8L24.5332 3.46667C24.1332 2.8 23.3332 2.53334 22.6665 2.93334C22.5332 3.06667 22.2665 3.2 22.1332 3.46667L17.4665 12.8C17.1998 13.3333 17.4665 14.1333 18.1332 14.5333ZM23.3332 6.93334L25.8665 12H20.7998L23.3332 6.93334ZM8.6665 2.66667C5.33317 2.66667 2.6665 5.33334 2.6665 8.66667C2.6665 12 5.33317 14.6667 8.6665 14.6667C11.9998 14.6667 14.6665 12 14.6665 8.66667C14.6665 5.33334 11.9998 2.66667 8.6665 2.66667ZM8.6665 12C6.79984 12 5.33317 10.5333 5.33317 8.66667C5.33317 6.80001 6.79984 5.33334 8.6665 5.33334C10.5332 5.33334 11.9998 6.80001 11.9998 8.66667C11.9998 10.5333 10.5332 12 8.6665 12ZM14.2665 17.7333C13.7332 17.2 12.9332 17.2 12.3998 17.7333L8.6665 21.4667L4.93317 17.7333C4.39984 17.2 3.59984 17.2 3.0665 17.7333C2.53317 18.2667 2.53317 19.0667 3.0665 19.6L6.79984 23.3333L3.0665 27.0667C2.53317 27.6 2.53317 28.4 3.0665 28.9333C3.59984 29.4667 4.39984 29.4667 4.93317 28.9333L8.6665 25.2L12.3998 28.9333C12.9332 29.4667 13.7332 29.4667 14.2665 28.9333C14.7998 28.4 14.7998 27.6 14.2665 27.0667L10.5332 23.3333L14.2665 19.6C14.7998 19.0667 14.7998 18.2667 14.2665 17.7333ZM27.9998 17.3333H18.6665C17.8665 17.3333 17.3332 17.8667 17.3332 18.6667V28C17.3332 28.8 17.8665 29.3333 18.6665 29.3333H27.9998C28.7998 29.3333 29.3332 28.8 29.3332 28V18.6667C29.3332 17.8667 28.7998 17.3333 27.9998 17.3333ZM26.6665 26.6667H19.9998V20H26.6665V26.6667Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <h3 className="mb-2 text-lg lg:text-2xl font-bold font-heading">
                Neque porro quisquam est
              </h3>
              <ul className="list-inside list-disc leading-loose text-gray-500">
                <li className="text-indigo-500">
                  <a className="text-gray-500 hover:underline" href="#">
                    Etiam pellentesque non nibh
                  </a>
                </li>
                <li className="text-indigo-500">
                  <a className="text-gray-500 hover:underline" href="#">
                    Mauris posuere
                  </a>
                </li>
                <li className="text-indigo-500">
                  <a className="text-gray-500 hover:underline" href="#">
                    Tellus sit amet tempus vestibulum
                  </a>
                </li>
                <li className="text-indigo-500">
                  <a className="text-gray-500 hover:underline" href="#">
                    Erat augue imperdiet neque
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Footer({ entityTitle }) {
  return (
    <section id="footer" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-3/5 flex flex-wrap">
            <div className="w-1/2 lg:w-1/4 mb-8">
              <h3 className="mb-4 text-lg font-bold font-heading">Company</h3>
              <ul className="text-sm">
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Careers
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Press
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 lg:w-1/4 mb-8">
              <h3 className="mb-4 text-lg font-bold font-heading">Pages</h3>
              <ul className="text-sm">
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Login
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Register
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Add list
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 lg:w-1/4 mb-8">
              <h3 className="mb-4 text-lg font-bold font-heading">Legal</h3>
              <ul className="text-sm">
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Terms
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Team
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 lg:w-1/4 mb-8">
              <h3 className="mb-4 text-lg font-bold font-heading">Resources</h3>
              <ul className="text-sm">
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Blog
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Service
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Product
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-indigo-500 hover:text-indigo-700" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-first lg:order-last mb-10 lg:mb-0 w-full lg:w-2/5">
            <h3 className="mb-4 text-lg font-bold font-heading">Subscribe</h3>
            <p className="mb-5 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <input
              className="w-full lg:w-2/3 mb-4 pl-4 py-3 mr-4 border rounded"
              type="email"
              placeholder="Type your e-mail"
            />
            <button className="inline-block px-5 py-3 text-sm bg-indigo-500 hover:bg-indigo-600 text-white font-semibold border border-indigo-500 hover:border-indigo-600 rounded transition duration-200">
              Action
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 lg:mt-16 mb-8 border-b border-indigo-50" />
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <a className="text-gray-600 text-2xl leading-none" href="#">
              <img
                className="h-8"
                src="/logos/plain-indigo.svg"
                alt={`${entityTitle} logo`}
                width="auto"
                height="2rem"
              />
            </a>
            <p className="hidden lg:block mt-3 text-sm text-gray-500">
              All rights reserved. © Plain Inc. 2022
            </p>
          </div>
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <div className="mb-4 flex lg:justify-end">
              <a className="inline-block mr-8" href="#">
                <img
                  alt="Facebook (Meta) social link icon"
                  src="/socials/facebook.svg"
                />
              </a>
              <a className="inline-block mr-8" href="#">
                <img
                  src="/socials/twitter.svg"
                  alt="Twitter social link icon"
                />
              </a>
              <a className="inline-block mr-8" href="#">
                <img src="/socials/github.svg" alt="Github link icon" />
              </a>
              <a className="inline-block mr-8" href="#">
                <img src="/socials/instagram.svg" alt="Instagram link icon" />
              </a>
              <a className="inline-block" href="#">
                <img src="/socials/linkedin.svg" alt="LinkedIn link icon" />
              </a>
            </div>
          </div>
          <p className="lg:hidden text-sm text-gray-500">
            All rights reserved. © Plain Inc. 2022
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Funded() {
  const entityTitle = "Tincre";
  const title = `Funded, by ${entityTitle}`;
  const description =
    "A Single Page Application for getting funded, built on Next.js and Tailwindcss, by Tincre.";
  const author = "Tincre Engineering, https://tincre.com";
  return (
    <div>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="author" content={author} />

      <div>
        <NavigationHero entityTitle={entityTitle} />
        <Stats1 />
        <WhyInvest1 />
        <FactCards />
        <Stats2 />
        <WhyInvest2 />
        <FactSnippets />
        <InfoCarousel />
        <Considerations />
        <Team />
        <FAQ />
        <Footer entityTitle={entityTitle} />
      </div>
    </div>
  );
}
