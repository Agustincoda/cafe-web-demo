/**
 * Centers content and applies the same side padding on every section.
 * Change max-w-6xl here to make the whole site wider or narrower.
 * Extra props (aria-label, id...) are passed to the element.
 */
export default function Container({ as: Tag = "div", className = "", children, ...props }) {
  return (
    <Tag className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`} {...props}>
      {children}
    </Tag>
  );
}
