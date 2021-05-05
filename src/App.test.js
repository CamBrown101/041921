import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Sphere Pups logo", () => {
  render(<App />);
  const element = screen.getByText("Sphere Pups");
  expect(element).toBeInTheDocument();
});
