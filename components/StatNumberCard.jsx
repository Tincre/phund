import DefaultStatsIcon from "./DefaultStatsIcon";

export default function StatNumberCard({ icon, numberStat, text }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 text-center">
      {!icon ? <DefaultStatsIcon /> : icon}
      <h3 className="mb-2 text-2xl font-bold font-heading">{numberStat}</h3>
      <p className="text-lg text-gray-500">{text}</p>
    </div>
  );
}
