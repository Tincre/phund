export default function WhyInvestHero({ subTitle, title, description }) {
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
      </div>
    </div>
  );
}
