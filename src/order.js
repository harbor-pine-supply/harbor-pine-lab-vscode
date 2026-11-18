// Money is integer cents.
export const subtotal = (lines) => lines.reduce((sum, l) => sum + l.unitCents * l.qty, 0);
