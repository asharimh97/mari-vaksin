import { generateVaccineTypes } from "../generator";

const datas = [
  { vaccine: "Sinovac" },
  { vaccine: "Sinovac" },
  { vaccine: "Astra Zenica" },
  { vaccine: "Sinovac" },
  { vaccine: "Moderna" },
];

it("generate unique vaccine type", () => {
  const vaccines = generateVaccineTypes(datas);
  const expected = ["Sinovac", "Astra Zenica", "Moderna"];

  expect(vaccines.length).toBe(3);
  expect(vaccines).toEqual(expected);
});
