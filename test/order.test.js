import { test } from "node:test";
import assert from "node:assert/strict";
import { subtotal } from "../src/order.js";

test("subtotal adds line totals in cents", () => {
  assert.equal(subtotal([{ unitCents: 1250, qty: 2 }, { unitCents: 499, qty: 1 }]), 2999);
});
