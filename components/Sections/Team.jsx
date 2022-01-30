function TeamCard({ name, position, description, imageSrc, imageAlt }) {
  return (
    <div className="w-full lg:w-1/2 p-4">
      <div className="bg-gray-50 p-6 rounded">
        <div className="flex flex-wrap items-center justify-center -mx-4">
          <div className="w-full md:w-2/5 px-4 mb-4 lg:mb-0">
            <img
              className="md:w-full h-52 object-cover rounded-lg justify-center mx-auto"
              src={imageSrc}
              alt={imageAlt}
            />
          </div>
          <div className="w-full md:w-3/5 px-4 text-center">
            <h3 className="text-2xl font-bold font-heading mb-1">{name}</h3>
            <p className="mb-2 text-lg text-gray-400">{position}</p>
            <p className="text-lg text-gray-500 leading-loose">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Team({
  subTitle,
  title,
  description,
  teamCardContent,
}) {
  return (
    <section id="team" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-lg lg:max-w-2xl mx-auto text-center mb-12 lg:mb-16">
          <span className="text-xs font-semibold text-indigo-500 uppercase">
            {subTitle}
          </span>
          <h2 className="mt-2 mb-4 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">
            {title}
          </h2>
          <p className="text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {teamCardContent?.map((props, index) => {
            return <TeamCard {...props} key={`${index}-${props?.name}`} />;
          })}
        </div>
      </div>
    </section>
  );
}
