export default function WhyInvest1Card({ label, description }) {
  return (
    <div className="w-full md:w-1/2 lg:w-full flex items-center justify-center lg:justify-start flex-col lg:flex-row px-4 mb-8 lg:mb-6 ">
      <span className="mb-4 lg:mb-0 flex-shrink-0 flex justify-center items-center w-12 h-12 rounded-full bg-indigo-500 text-indigo-50 font-bold font-heading">
        {label}
      </span>
      <div className="max-w-xs">
        <p className="text-lg text-gray-500 leading-loose py-2 lg:pl-4 ">
          {description}
        </p>
      </div>
    </div>
  );
}
