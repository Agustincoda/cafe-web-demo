/** Title (h2) + optional subtitle used at the top of each section. */
export default function SectionHeading({ id, title, subtitle, className = "" }) {
  return (
    <div className={`mb-8 ${className}`}>
      <h2 id={id} className="text-3xl font-bold sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-muted">{subtitle}</p>}
    </div>
  );
}
