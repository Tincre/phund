export default function FactCards({ factCardsContent }) {
  return (
    <section id="fact-cards" className="bg-indigo-500 py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          {factCardsContent?.map(({ title, description }, index) => {
            return (
              <div
                key={`${index}-fact-card`}
                className="group w-full lg:w-1/2 p-4"
                id={`${index}-fact-card`}
              >
                <a href={`#${index}-fact-snippet-card`}>
                  <div className="py-12 px-10 md:h-96 rounded-lg bg-white group-hover:bg-indigo-800 transition hover:ease-in ease-out duration-300">
                    <span className="mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500 group-hover:bg-indigo-200 text-indigo-50 group-hover:text-indigo-800 font-bold font-heading transition hover:ease-in ease-out duration-700">
                      {index + 1}
                    </span>
                    <h3 className="mb-4 md:h-36 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading group-hover:text-white transition hover:ease-in ease-out duration-300">
                      {title}
                    </h3>
                    <p className="text-lg text-gray-500 leading-loose group-hover:text-indigo-100 transition hover:ease-in ease-out duration-700">
                      {description}
                    </p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
