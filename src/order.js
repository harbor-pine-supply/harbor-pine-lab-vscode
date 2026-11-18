// Money is integer cents.
export const subtotal = (lines) => lines.reduce((sum, l) => sum + l.unitCents * l.qty, 0);

export const FREE_SHIPPING_THRESHOLD_CENTS = 7500;
export const SHIPPING_CENTS = 895;

// Empty orders ship nothing, so they cost nothing.
export const shipping = (lines) => {
  if (lines.length === 0) return 0;
  return subtotal(lines) >= FREE_SHIPPING_THRESHOLD_CENTS ? 0 : SHIPPING_CENTS;
};

export const total = (lines) => subtotal(lines) + shipping(lines);
