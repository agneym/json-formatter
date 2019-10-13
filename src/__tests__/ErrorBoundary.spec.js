import React from "react";
import { render } from "@testing-library/react";
import ErrorBoundary from "../components/ErrorBoundary";

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterAll(() => {
  console.error.mockRestore();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("ErrorBoundary component", () => {
  const ErrorComponent = ({ shouldThrow }) => {
    if (shouldThrow) {
      throw new Error("test error");
    } else {
      return "rendered component";
    }
  };
  it("should catch error", () => {
    render(
      <ErrorBoundary>
        <ErrorComponent shouldThrow />
      </ErrorBoundary>
    );

    expect.any(Error);
    expect.stringContaining("test error");
  });

  it("should render component without problem", () => {
    const { getByText } = render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(console.error).not.toHaveBeenCalled();
    expect(getByText("rendered component")).toBeTruthy();
  });
});
