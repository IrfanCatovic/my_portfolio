import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  class MockIntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  Object.defineProperty(window, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });

  Object.defineProperty(window, "matchMedia", {
    writable: true,
    configurable: true,
    value: (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });
});

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
