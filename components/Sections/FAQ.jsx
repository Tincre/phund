import FAQCard from "../FAQCard";

export default function FAQ({ subTitle, title, fAQCardContent }) {
  return (
    <section id="faq" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold text-indigo-500 uppercase">
            {subTitle}
          </span>
          <h2 className="mt-2 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
            {title || "Frequently Asked Questions"}
          </h2>
        </div>
        <div className="flex flex-wrap -mx-4 -mb-8">
          {fAQCardContent?.map(({ title, listItems }, index) => {
            return (
              <FAQCard
                title={title}
                listItems={listItems}
                key={`${index}-main-faq-card`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
