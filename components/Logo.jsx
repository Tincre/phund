export default function Logo({ logoSrc, entityTitle }) {
  return logoSrc ? (
    <img
      className="h-16"
      src={logoSrc}
      alt={`The ${entityTitle} logo`}
      width="auto"
      height="4rem"
    />
  ) : (
    <div className="inline">
      <h1 className="first-letter:text-indigo-800 first-letter:font-extrabold first-letter:text-5xl font-semibold tracking-wide text-indigo-500 text-2xl italic">
        {entityTitle}
      </h1>
    </div>
  );
}
