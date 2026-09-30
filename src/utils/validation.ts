// Shared by the contact form and `/api/contact`, so both accept the same numbers: empty, or at least six digits,
// spaces, brackets, plus and minus signs.
export const phoneRegex = /^$|^[\d\s()+-]{6,}$/u;
