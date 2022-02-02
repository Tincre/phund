export default function WhyInvestHero({ subTitle, title, description, cta }) {
  return (
    <div className="w-full lg:w-1/2 px-4 text-center lg:text-left">
      <div className="lg:mx-auto mb-10 lg:mb-0">
        <span className="text-xs font-semibold text-indigo-500 uppercase">
          {subTitle}
        </span>
        <h2 className="mt-2 mb-4 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
          {title}
        </h2>
        <p className="mb-8 text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">
          {description}
        </p>
        <a
          className="inline-block px-5 py-3 md:mr-3 mb-3 md:mb-0 text-sm bg-indigo-500 hover:bg-indigo-600 text-white font-semibold border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
          href="#"
        >
          {cta}
        </a>
      </div>
    </div>
  );
}
