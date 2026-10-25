"use client";

import { useRef, useState } from "react";
import { texts } from "@/data/texts";
import { validateNewsletter } from "@/lib/validation";

const t = texts.contact.newsletter;
const EMPTY_FORM = { name: "", phone: "", email: "", consent: false };

// Order used to move the focus to the first field with an error.
const FIELD_ORDER = ["name", "phone", "email", "consent"];

const inputClasses =
  "mt-1 block w-full rounded-lg border-2 border-text/20 bg-background px-3 py-2.5 text-text " +
  "placeholder:text-muted focus:border-primary aria-[invalid=true]:border-red-700";

/** Small helper so each field shows its error message (if any) below the input. */
function FieldError({ id, message }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 text-sm font-medium text-red-700">
      {message}
    </p>
  );
}

/**
 * Newsletter sign-up: name, phone (optional), email and consent.
 *
 * Validation runs in the browser on submit. There is no real sending yet:
 * on success we just show a thank-you message (see handleSubmit).
 */
export default function NewsletterForm() {
  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);
  const formRef = useRef(null);

  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    setValues((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
    // Clear the error of a field as soon as the user edits it.
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function handleSubmit(event) {
    // Stop the browser from sending the form (and from putting the data in the URL).
    event.preventDefault();

    const newErrors = validateNewsletter(values);
    setErrors(newErrors);

    const firstInvalid = FIELD_ORDER.find((field) => newErrors[field]);
    if (firstInvalid) {
      formRef.current.elements[firstInvalid].focus();
      return;
    }

    // ------------------------------------------------------------------
    // PLUG A REAL SERVICE IN HERE.
    // Right now nothing is sent. For a real client, send `values` to e.g.:
    //  - Formspree:  await fetch("https://formspree.io/f/<form-id>", {
    //                  method: "POST",
    //                  headers: { "Content-Type": "application/json", Accept: "application/json" },
    //                  body: JSON.stringify(values),
    //                });
    //  - A Next.js API route (app/api/newsletter/route.js) that saves the
    //    contact in Mailchimp, Brevo, a Google Sheet, etc.
    // Remember to show an error message if the request fails.
    // ------------------------------------------------------------------
    setIsSent(true);
    setValues(EMPTY_FORM);
  }

  if (isSent) {
    return (
      // role="status" makes screen readers announce the message.
      <div role="status" className="rounded-2xl bg-surface p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-primary">{t.successTitle}</h2>
        <p className="mt-2 text-muted">{t.successMessage}</p>
        <button
          type="button"
          onClick={() => setIsSent(false)}
          className="mt-6 font-medium text-primary underline underline-offset-4 hover:opacity-80"
        >
          {t.reset}
        </button>
      </div>
    );
  }

  // Props shared by the 3 text inputs: value, change handler and a11y attributes.
  const fieldProps = (name) => ({
    id: `newsletter-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `newsletter-${name}-error` : undefined,
    className: inputClasses,
  });

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      // noValidate: we show our own messages instead of the browser's default bubbles.
      noValidate
      aria-labelledby="newsletter-title"
      className="rounded-2xl bg-surface p-6 sm:p-8"
    >
      <h2 id="newsletter-title" className="text-2xl font-bold">
        {t.title}
      </h2>
      <p className="mt-2 text-muted">{t.subtitle}</p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="newsletter-name" className="font-medium">
            {t.fields.name}
          </label>
          <input type="text" autoComplete="name" {...fieldProps("name")} />
          <FieldError id="newsletter-name-error" message={errors.name} />
        </div>

        <div>
          <label htmlFor="newsletter-phone" className="font-medium">
            {t.fields.phone} <span className="font-normal text-muted">{t.optional}</span>
          </label>
          <input type="tel" inputMode="tel" autoComplete="tel" {...fieldProps("phone")} />
          <FieldError id="newsletter-phone-error" message={errors.phone} />
        </div>

        <div>
          <label htmlFor="newsletter-email" className="font-medium">
            {t.fields.email}
          </label>
          <input type="email" inputMode="email" autoComplete="email" {...fieldProps("email")} />
          <FieldError id="newsletter-email-error" message={errors.email} />
        </div>

        <div>
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="newsletter-consent"
              name="consent"
              checked={values.consent}
              onChange={handleChange}
              aria-invalid={errors.consent ? true : undefined}
              aria-describedby={errors.consent ? "newsletter-consent-error" : undefined}
              className="mt-1 h-5 w-5 shrink-0 accent-primary"
            />
            <label htmlFor="newsletter-consent" className="text-sm">
              {t.consent}
            </label>
          </div>
          <FieldError id="newsletter-consent-error" message={errors.consent} />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-primary px-6 py-3 font-medium text-on-primary transition hover:opacity-90 sm:w-auto"
      >
        {t.submit}
      </button>
    </form>
  );
}
