import { signIn } from "next-auth/react";

export default function FactSnippetsHero({
  subTitle,
  title,
  description,
  cta1,
  cta1Href,
  session,
}) {
  return (
    <div className="max-w-3xl mx-auto mb-12 lg:mb-16 text-center">
      <span className="text-sm text-indigo-500 font-bold uppercase">
        {subTitle}
      </span>
      <h2 className="mt-2 mb-4 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
        {title}
      </h2>
      <p className="text-lg text-gray-500 leading-loose">{description}</p>
      <div className="mt-8">
        <a
          className="block md:inline-block px-5 py-3 md:mr-3 mb-3 md:mb-0 text-sm bg-indigo-500 hover:bg-indigo-600 text-white font-semibold border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
          href={cta1Href}
        >
          {cta1}
        </a>
        {!!session ? (
          <button
            className="block md:inline-block px-5 py-3 text-sm font-semibold text-indigo-500 hover:text-white hover:bg-indigo-500 border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
            onClick={() => signIn()}
          >
            Log in
          </button>
        ) : null}
      </div>
    </div>
  );
}
