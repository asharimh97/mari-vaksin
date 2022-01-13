/* eslint-disable no-undef */
import { cleanString } from "../general";

const dirtyString = "   Halo, apa kabar?\nIni saya loh. ";

it("clean string properly", () => {
  const cleaned = cleanString(dirtyString);
  const expected = "Halo, apa kabar? Ini saya loh.";

  expect(cleaned).toBe(expected);
});
