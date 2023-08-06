import React from "react";
import { render } from "@testing-library/react";
import Button from "../Button";

describe("Button component", () => {
  it("Renders the button component without crashing", () => {
    render(<Button></Button>);
  });
});
