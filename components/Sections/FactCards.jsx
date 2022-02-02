export default function FactCards({ factCardsContent }) {
  return (
    <section id="fact-cards" className="bg-indigo-500 py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          {factCardsContent?.map(({ title, description }, index) => {
            return (
              <div key={`${index}-fact-card`} className="w-full lg:w-1/2 p-4">
                <div className="py-12 px-10 rounded-lg bg-white">
                  <span className="mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500 text-indigo-50 font-bold font-heading">
                    {index + 1}
                  </span>
                  <h3 className="mb-4 h-36 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
                    {title}
                  </h3>
                  <p className="text-lg text-gray-500 leading-loose">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
