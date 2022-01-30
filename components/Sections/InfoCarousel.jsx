export default function InfoCarousel({}) {
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
