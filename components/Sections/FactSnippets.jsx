import FactSnippetsHero from "../FactSnippetsHero";

export default function FactSnippets({
  title,
  subTitle,
  description,
  cta1,
  cta2,
  cta1Href,
  cta2Href,
  factSnippetsCardContent,
  session,
}) {
  return (
    <section id="fact-snippets" className="py-20">
      <div className="container px-4 mx-auto">
        <FactSnippetsHero
          title={title}
          subTitle={subTitle}
          description={description}
          cta1={cta1}
          cta2={cta2}
          cta1Href={cta1Href}
          cta2Href={cta2Href}
        />
        <div className="flex flex-wrap items-center justify-around -m-4 text-center">
          {factSnippetsCardContent?.map(
            ({ description, imageSrc, title, subTitle }, index) => {
              return (
                <div
                  className="w-full md:w-1/2 lg:w-1/3 p-4"
                  key={`${index}-fact-snippet-card`}
                >
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="mb-8 text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">
                      {description}
                    </p>
                    <img
                      className="mb-2 h-12 w-12 object-cover rounded-full mx-auto"
                      src={imageSrc}
                      alt={`${title} fact snippet heading object`}
                    />
                    <p className="text-2xl font-bold font-heading">{title}</p>
                    <p className="text-lg text-gray-400">{subTitle}</p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
