/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import VaccineInfo from "../VaccineInfo";
import { MapMarkerIcon } from "evergreen-ui";

it("renders vaccine info properly", () => {
  render(<VaccineInfo icon={MapMarkerIcon} description="Puskesmas Sekaran" />);

  expect(screen.getByText("Puskesmas Sekaran")).toBeInTheDocument();
});
