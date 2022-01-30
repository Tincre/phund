export default function WhyInvest1Card({ label, description }) {
  return (
    <div className="w-full md:w-1/2 lg:w-full flex items-start flex-col lg:flex-row px-4 mb-8 lg:mb-6">
      <span className="mr-10 mb-4 lg:mb-0 flex-shrink-0 flex justify-center items-center w-12 h-12 rounded-full bg-indigo-500 text-indigo-50 font-bold font-heading">
        {label}
      </span>
      <div className="max-w-xs">
        <p className="text-lg text-gray-500 leading-loose">{description}</p>
      </div>
    </div>
  );
}
