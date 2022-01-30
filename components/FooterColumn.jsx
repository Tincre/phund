export default function FooterColumn({ title, footerColumnItems }) {
  return (
    <div className="w-1/2 lg:w-1/4 mb-8 justify-between">
      <h3 className="mb-4 text-lg font-bold font-heading">{title}</h3>
      <ul className="text-sm">
        {footerColumnItems?.map(({ text, href }, index) => (
          <li
            className="mb-2"
            key={`${index}-footer-item-${title?.toLowerCase()}`}
          >
            <a className="text-indigo-500 hover:text-indigo-700" href={href}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
