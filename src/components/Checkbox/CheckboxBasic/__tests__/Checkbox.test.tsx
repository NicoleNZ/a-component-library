import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CheckboxSVG from "../Checkbox";

describe("CheckboxSVG component", () => {
  it("Renders the CheckboxSVG component without crashing", () => {
    render(<CheckboxSVG></CheckboxSVG>);
    expect(screen.getByTitle("CheckboxSVG")).toBeInTheDocument();
  });
});
