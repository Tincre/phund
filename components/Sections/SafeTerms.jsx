export default function SafeTerms({ title, subTitle, description }) {
  return (
    <section id="safe-terms">
      <div className="px-4 max-w-3xl mx-auto mb-12 lg:mb-16 text-center">
        <span className="text-sm text-indigo-500 font-bold uppercase">
          {subTitle}
        </span>
        <h2 className="mt-2 mb-4 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
          {title}
        </h2>
        <p className="text-lg text-gray-500 leading-loose">{description}</p>
      </div>
      <div className="max-w-3xl grid md:grid-cols-3 gap-2 mx-auto my-10">
        {[
          {
            safeTitle: "Cap",
            href: "",
            description: '"Standard", valuation cap only.',
          },
          {
            safeTitle: "Discount",
            href: "",
            description:
              "Discount applies at conversion during the Liquidity Event.",
          },
          {
            safeTitle: "MFN",
            href: "",
            description: "No cap and no discount with MFN provision.",
          },
        ]?.map((item, index) => (
          <div className="group" key={`${index + 1}-safe-button`}>
            <button className="block w-2/5 md:w-3/5 lg:w-4/5 mx-auto px-5 py-3 mb-3 md:mb-0 text-sm bg-indigo-500 group-hover:bg-indigo-600 text-white font-semibold border border-indigo-500 group-hover:border-indigo-600 rounded transition duration-200">
              {" "}
              {item?.safeTitle}
            </button>
            <p className="mx-auto text-center group-hover:font-bold mb-6 mt-1 md:mb-0 mt-4 text-xs italic w-2/5 md:w-3/5 lg:w-4/5">
              {item?.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
