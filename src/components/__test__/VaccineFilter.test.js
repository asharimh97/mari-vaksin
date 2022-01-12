/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import VaccineFilter from "../VaccineFilter";

// The data being used in this component is only vaccine, thus
// we only mock the vaccine data
const datas = [
  { vaccine: "Sinovac" },
  { vaccine: "Sinovac" },
  { vaccine: "Astra Zenica" },
  { vaccine: "Sinovac" },
  { vaccine: "Moderna" },
];

it("renders vaccine filter correctly", () => {
  const mockCallback = jest.fn();
  render(
    <VaccineFilter
      vaccineData={datas}
      onSelectFilter={mockCallback}
      selectedFilter=""
    />
  );

  // [Semua Jenis, Sinovac, Astra Zenica, Moderna]
  expect(screen.getAllByRole("option").length).toBe(4);
});
