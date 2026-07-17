import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio hero identity", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { level: 1, name: /Irfan Ćatović/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("navigation", { name: /primary/i })).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /Featured Projects/i })
  ).toBeInTheDocument();
});
