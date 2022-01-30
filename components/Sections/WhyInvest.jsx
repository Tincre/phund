import WhyInvestHero from "../WhyInvestHero";
import WhyInvestCard from "../WhyInvestCard";

export default function WhyInvest({
  title,
  subTitle,
  description,
  cta,
  whyInvestCardData,
}) {
  return (
    <section id="why-invest" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <WhyInvestHero
            subTitle={subTitle}
            title={title}
            description={description}
            cta={cta}
          />
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex flex-wrap px-2 py-6 md:px-8 md:py-12 bg-gray-50 rounded-lg">
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
        </div>
      </div>
    </section>
  );
}
