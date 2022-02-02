export default function InfoBlock({ title, description, cta, ctaHref }) {
  return (
    <section id="info-block" className="py-20 bg-indigo-500">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="max-w-2xl mb-8 mx-auto text-center">
            <h2 className="mb-4 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading text-white">
              {title}
            </h2>
            <p className="mb-8 text-base leading-relaxed lg:text-xl lg:leading-relaxed text-indigo-50">
              {description}
            </p>
            <a
              className="inline-block px-5 py-3 text-sm bg-white hover:bg-indigo-50 text-indigo-500 font-semibold border border-white rounded transition duration-200"
              href={ctaHref}
            >
              {cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
