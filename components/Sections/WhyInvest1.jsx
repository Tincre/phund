import WhyInvest1Hero from "../WhyInvest1Hero";
import WhyInvest1Card from "../WhyInvest1Card";

export default function WhyInvest1({
  title,
  subTitle,
  description,
  cta,
  whyInvest1CardData,
}) {
  return (
    <section id="why-invest-part-1" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <WhyInvest1Hero
            subTitle={subTitle}
            title={title}
            description={description}
            cta={cta}
          />
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex flex-wrap px-2 py-6 md:px-8 md:py-12 bg-gray-50 rounded-lg">
              {whyInvest1CardData?.map((description, index) => {
                return (
                  <WhyInvest1Card
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
