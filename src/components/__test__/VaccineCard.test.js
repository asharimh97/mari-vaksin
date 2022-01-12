/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import VaccineCard from "../VaccineCard";

const props = {
  location: "Puskesmas Sembarang",
  vaccine: "Sinovac",
  dose: "Dosis 1",
  start: "08:30:00 WIB",
  end: "09:30:00 WIB",
  capacity: "100",
  filled: "3",
  note: "Untuk masyarakat umum",
};

describe("test vaccine card", () => {
  it("renders vaccine card properly", () => {
    render(<VaccineCard key="1" item={props} />);

    expect(screen.getByText(props.location)).toBeInTheDocument();
    expect(screen.getByText(props.vaccine)).toBeInTheDocument();
    expect(screen.getByText(props.dose)).toBeInTheDocument();
    expect(
      screen.getByText(`${props.filled}/${props.capacity}`)
    ).toBeInTheDocument();
    expect(screen.getByText(props.note)).toBeInTheDocument();
  });

  it("renders badge penuh", () => {
    const vaccine = {
      ...props,
      filled: props.capacity,
    };

    render(<VaccineCard item={vaccine} />);

    expect(screen.getByText("Penuh")).toBeInTheDocument();
  });
});
