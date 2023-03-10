import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { Select } from "../Select";
import { ORDER_TYPE_IN_PRICE } from "@/data/common";

describe("Select", () => {
  it("should render Select component with ascending order type", () => {
    render(
      <Select
        id="select-id-test"
        title="Ordenar"
        options={ORDER_TYPE_IN_PRICE}
        handleChange={jest.fn()}
      />
    );

    userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "Precio ascendente" })
    );

    const optionSelectedText = screen.getByRole("option", {
      selected: true,
    }).textContent;
    expect(optionSelectedText).toBe("Precio ascendente");
  });

  it("should render Select component with descending order type", () => {
    render(
      <Select
        id="select-id-test"
        title="Ordenar"
        options={ORDER_TYPE_IN_PRICE}
        handleChange={jest.fn()}
      />
    );

    userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "Precio descendente" })
    );

    const optionSelectedText = screen.getByRole("option", {
      selected: true,
    }).textContent;
    expect(optionSelectedText).toBe("Precio descendente");
  });
});
