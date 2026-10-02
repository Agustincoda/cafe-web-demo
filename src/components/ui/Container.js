const sizes = {
  default: "max-w-6xl", // most sections
  narrow: "max-w-3xl", // reading-width pages (e.g. the menu list)
};

/**
 * Centers content and applies the same side padding on every section.
 * Change the widths in `sizes` to make the whole site wider or narrower.
 * Extra props (aria-label, id...) are passed to the element.
 */
export default function Container({ as: Tag = "div", size = "default", className = "", children, ...props }) {
  return (
    <Tag className={`mx-auto w-full ${sizes[size]} px-4 sm:px-6 lg:px-8 ${className}`} {...props}>
      {children}
    </Tag>
  );
}
