import { texts } from "@/data/texts";

const errors = texts.contact.newsletter.errors;

// Simple, permissive email check: something@something.something
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Counts only the digits, so "+54 11 5555-0123" and "541155550123" are treated the same. */
function countDigits(value) {
  return value.replace(/\D/g, "").length;
}

/**
 * Validates the newsletter form.
 * Receives { name, phone, email, consent } and returns an object with one
 * message per invalid field, e.g. { email: "Please enter your email." }.
 * An empty object means everything is valid.
 */
export function validateNewsletter({ name, phone, email, consent }) {
  const result = {};

  if (!name.trim()) result.name = errors.nameRequired;

  if (!email.trim()) result.email = errors.emailRequired;
  else if (!EMAIL_PATTERN.test(email.trim())) result.email = errors.emailInvalid;

  // Phone is optional: only checked when something was typed.
  if (phone.trim()) {
    const digits = countDigits(phone);
    const onlyPhoneCharacters = /^[\d\s()+-]+$/.test(phone.trim());
    if (!onlyPhoneCharacters || digits < 8 || digits > 15) result.phone = errors.phoneInvalid;
  }

  if (!consent) result.consent = errors.consentRequired;

  return result;
}
