import { signIn, signOut } from "next-auth/react";

export default function Hero({
  heading,
  subHeading,
  cta1,
  cta2,
  imageSrc,
  session,
}) {
  return (
    <div className="flex flex-wrap items-center -mx-4 mt-10 lg:my-10">
      <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
        <h2 className="max-w-sm mb-8 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
          {heading}
        </h2>
        <p className="max-w-lg mb-8 text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">
          {subHeading}
        </p>
        <div>
          <a
            className="w-full lg:w-2/5 block lg:inline-block px-5 py-3 lg:mr-3 mb-3 lg:mb-0 text-sm text-center bg-indigo-500 hover:bg-indigo-600 text-white font-semibold border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
            href="#"
          >
            {cta1}
          </a>
          {!session ? (
            <button
              className="w-full lg:w-2/5 block lg:inline-block px-5 py-3 text-sm text-center font-semibold text-indigo-500 hover:text-white hover:bg-indigo-500 border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
              onClick={() => signIn()}
            >
              Log in
            </button>
          ) : (
            <a
              className="w-full lg:w-1/2 block lg:inline-block px-5 py-3 text-sm text-center font-semibold text-indigo-500 hover:text-white hover:bg-indigo-500 border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
              href="#why-invest"
            >
              Invest
            </a>
          )}
        </div>
      </div>
      <div className="w-full md:w-1/2 px-4">
        <img
          className="object-cover w-full rounded-xl"
          src={imageSrc || "/images/indigo-600-square.png"}
          alt="Hero image"
        />
      </div>
      <a
        href="#why-invest"
        className="animate-pulse block mt-8 lg:mt-12 mx-auto w-16 h-16 p-5 rounded-full bg-indigo-50 hover:bg-indigo-100"
      >
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
      </a>
    </div>
  );
}
