/**
 * Turns the colors from siteConfig into CSS custom properties.
 *
 * The root layout puts this object in the <html> style attribute, so the page gets:
 *   <html style="--brand-primary: #6f4e37; --brand-secondary: ...">
 * globals.css then maps each --brand-* variable to a Tailwind color
 * (see the @theme block), which is what makes `bg-primary` etc. work.
 */
export function getThemeStyle(colors) {
  return {
    "--brand-primary": colors.primary,
    "--brand-secondary": colors.secondary,
    "--brand-background": colors.background,
    "--brand-text": colors.text,
    "--brand-on-primary": colors.onPrimary,
  };
}
