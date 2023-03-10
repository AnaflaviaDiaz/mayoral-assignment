import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { IncreaseDecreaseProducts } from "../IncreaseDecreaseProducts";

describe("IncreaseDecreaseProducts", () => {
  it("should render Increase and Decrease buttons", () => {
    const mockFn = jest.fn();
    render(
      <IncreaseDecreaseProducts
        handleClickDecrease={mockFn}
        handleClickIncrease={mockFn}
      />
    );
    const decreaseButton = screen.getByTestId("decrease");
    const increaseButton = screen.getByTestId("increase");

    expect(decreaseButton).toBeInTheDocument();
    expect(increaseButton).toBeInTheDocument();
  });
});
