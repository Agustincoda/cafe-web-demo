import Link from "next/link";

const variants = {
  primary: "bg-primary text-on-primary hover:opacity-90",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-on-primary",
  // For use on top of photos / dark backgrounds
  light: "bg-background text-text hover:opacity-90",
};

/** A link styled as a button. `variant` is "primary", "outline" or "light". */
export default function Button({ href, variant = "primary", className = "", children }) {
  return (
    <Link
      href={href}
      className={`inline-block rounded-full px-6 py-3 font-medium transition ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
