import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "../Input";

const testId = "input";

describe("Input component", () => {
  it("Renders the input component without crashing", () => {
    render(<Input testId={testId}></Input>);
  });

  it("Renders the input component with the correct placeholder text", () => {
    render(<Input testId={testId} placeholder={"Ewww David!"}></Input>);
    expect(screen.getByPlaceholderText("Ewww David!")).toHaveAttribute(
      "placeholder",
      "Ewww David!"
    );
  });

  it("renders the Input component with the right input text", async () => {
    render(<Input testId={testId} placeholder={"Ewww David!"} />);
    const input = screen.getByPlaceholderText(
      "Ewww David!"
    ) as HTMLInputElement;
    userEvent.type(
      input,
      "Okay, I don't know how to fold BROKEN CHEESE like that"
    );
    await waitFor(() =>
      expect(input.value).toBe(
        "Okay, I don't know how to fold BROKEN CHEESE like that"
      )
    );
  });
});
