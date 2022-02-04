import WhyInvestHero from "../WhyInvestHero";
import WhyInvestCard from "../WhyInvestCard";

export default function WhyInvest({
  title,
  subTitle,
  description,
  cta,
  whyInvestCardData,
  session,
}) {
  return (
    <section id="why-invest" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap text-center lg:text-left">
          <WhyInvestHero
            subTitle={subTitle}
            title={title}
            description={description}
            cta={cta}
          />
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex flex-wrap px-2 py-6 md:px-8 md:py-12 bg-gray-50 rounded-lg items-start">
              {whyInvestCardData?.map((description, index) => {
                return (
                  <WhyInvestCard
                    label={index + 1}
                    description={description}
                    key={`${index + 1}-part-1`}
                  />
                );
              })}
            </div>
          </div>
          {!session ? null : (
            <div className="mt-12 text-center mx-auto">
              <a
                className="inline-block px-12 py-3 mb-3 md:mb-0 text-sm bg-indigo-500 hover:bg-indigo-600 text-white font-semibold border border-indigo-500 hover:border-indigo-600 rounded transition duration-200"
                href="#safe-terms"
              >
                {cta}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
