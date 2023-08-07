import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Checkbox from "../Checkbox";

describe("Checkbox component", () => {
  it("Renders the Checkbox component without crashing", () => {
    render(<Checkbox></Checkbox>);
  });
});
