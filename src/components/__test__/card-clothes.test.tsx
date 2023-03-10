import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { CardClothes } from "../CardClothes";

describe("CardClothes", () => {
  it("should render without discount", () => {
    const titleTest = "Name clothes test";
    render(
      <CardClothes
        title={titleTest}
        alt={titleTest}
        price={23.99}
        urlImage="https://assets.mayoral.com/images/t_auto_img/h_896/v20220420052509/12-04390-082-XL-2/jersey-con-capucha-para-nino_id_12-04390-082-M-2.jpg"
      />
    );

    const title = screen.getByText(titleTest);
    const formattedPrice = screen.getByText("23,99 €");
    expect(title).toBeInTheDocument();
    expect(formattedPrice).toBeInTheDocument();
  });

  it("should render with discount", () => {
    const titleTest = "Name clothes test";
    const { container } = render(
      <CardClothes
        title={titleTest}
        alt={titleTest}
        price={31.99}
        discountPercentage={50}
        urlImage="https://assets.mayoral.com/images/t_auto_img/h_896/v20220420052509/12-04390-082-XL-2/jersey-con-capucha-para-nino_id_12-04390-082-M-2.jpg"
      />
    );

    const title = screen.getByText(titleTest);
    const formattedPrice = screen.getByText("31,99 €");
    const formattedDiscountPriceWithPercent = screen.getByText("15,99 €(50%)");
    expect(title).toBeInTheDocument();
    expect(formattedPrice).toBeInTheDocument();
    expect(formattedDiscountPriceWithPercent).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
