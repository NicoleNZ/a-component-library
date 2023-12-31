import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "../Button";

const testId = "button";

describe("Button component", () => {
  it("Renders the button component without crashing", () => {
    render(<Button></Button>);
  });

  it("Renders the button component with the correct text", () => {
    render(<Button text={"Click Me!"}></Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Click Me!");
  });
});
