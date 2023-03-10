import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { DiscountPrice } from "../DiscountPrice";

describe("DiscountPrice", () => {
  it("should render a DiscountPrice component with discount percentage and price", () => {
    render(<DiscountPrice discountPercentage={50} price={27.99} />);
    const formattedDiscountAmount = screen.getByText("13,99 €(50%)");

    expect(formattedDiscountAmount).toBeInTheDocument();
  });
});
