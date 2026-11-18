import { test } from "node:test";
import assert from "node:assert/strict";
import { subtotal, total } from "../src/order.js";

test("subtotal adds line totals in cents", () => {
  assert.equal(subtotal([{ unitCents: 1250, qty: 2 }, { unitCents: 499, qty: 1 }]), 2999);
});

test("a 7499-cent order pays 895 shipping", () => {
  const result = total([{ unitCents: 7499, qty: 1 }]);
  assert.equal(result, 8394);
  assert.ok(Number.isInteger(result));
});

test("a 7500-cent order ships free", () => {
  const result = total([{ unitCents: 7500, qty: 1 }]);
  assert.equal(result, 7500);
  assert.ok(Number.isInteger(result));
});

test("an empty order totals exactly 0", () => {
  const result = total([]);
  assert.equal(result, 0);
  assert.ok(Number.isInteger(result));
});
