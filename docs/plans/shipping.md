# Plan: shipping cost (issue #1)

## Decision (a person, 2026-11-18)
- Approved, with the agent's recommendation on its question: an empty order has no shipping and totals 0 (nothing ships). In scope: shipping in the order total and its tests. Not in scope: taxes, discounts.

## Acceptance criteria (from the issue)
- Orders of 7500 cents or more ship free.
- Otherwise shipping is 895 cents.
- Amounts stay integer cents.
- `total(lines)` returns subtotal plus shipping; `subtotal` is unchanged.
- Tests cover 7499, 7500 and an empty order.

## Plan
I've written the plan to `plan-this-change-don-t-sprightly-hamming.md`; no code has been written yet. I need one decision from you before I start.

**What you need to decide: what does an empty order cost?** Read literally, an empty order (subtotal 0) is under 7500, so it would be charged 895 cents. A customer with an empty cart would see a total of $8.95.
- **My recommendation:** an empty order has no shipping and totals 0, since nothing ships.
- **The other option:** follow the criteria exactly, so an empty order totals 895.

**The plan:**
1. **`src/order.js`:** add two named constants (free shipping at 7500 cents, shipping 895 cents). Add `shipping(lines)` and `total(lines)`, where `total = subtotal(lines) + shipping(lines)`. `subtotal` stays as it is, and all the math stays in whole cents.
2. **`test/order.test.js`:** keep the existing test and add three:
   - A 7499-cent order totals 8394.
   - A 7500-cent order totals 7500.
   - An empty order totals 0 (or 895, depending on your choice above).

   Each new test also checks that the result is a whole number.
3. **Process (from `AGENTS.md`):**
   - Create a new branch from `main`.
   - Save the approved plan to `docs/plans/shipping-total.md`.
   - Run `npm test`.
   - Commit and open a pull request. The push will ask for your approval.

**How I'll check it:** all tests pass with `npm test`, and the diff shows `subtotal` didn't change.

Tell me which way to handle the empty order, or say "go" to use my recommendation.
