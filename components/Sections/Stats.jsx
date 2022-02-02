import StatNumberCard from "../StatNumberCard";

export default function Stats({ data }) {
  return (
    <section id="stats-1" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-start -mx-4 -mb-8">
          {data?.map((props, index) => {
            return <StatNumberCard {...props} key={`${index}` + "stats1"} />;
          })}
        </div>
      </div>
    </section>
  );
}
