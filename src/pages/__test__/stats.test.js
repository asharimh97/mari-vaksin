/* eslint-disable no-undef */
import "@testing-library/jest-dom/extend-expect";
import { render } from "../../utils/test-utils";
import StatsPage from "../stats";

describe("test app", () => {
  it("renders without caching", () => {
    render(<StatsPage />);
  });
});
