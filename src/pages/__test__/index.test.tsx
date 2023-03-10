import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

import { clothesMock } from "@/mock/clothes.stub";
import Home from "..";
import { IDLE_TIMEOUT_ON_INPUTS } from "@/data/common";

describe("Home", () => {
  it("should render Home", () => {
    const { container } = render(<Home clothes={clothesMock} />);
    expect(container).toMatchSnapshot();
  });

  describe("Order Ascending and Descending", () => {
    it("should order clothes by price ascending", () => {
      render(<Home clothes={clothesMock} />);

      const firstClothesBeforeOrder = clothesMock[0];
      expect(firstClothesBeforeOrder.price).toEqual(23.99);

      userEvent.selectOptions(
        screen.getByRole("combobox"),
        screen.getByRole("option", { name: "Precio ascendente" })
      );

      const optionSelectedText = screen.getByRole("option", {
        selected: true,
      }).textContent;
      expect(optionSelectedText).toBe("Precio ascendente");

      const allClothesAfterOrder = screen.getAllByText((content, element) => {
        return (
          element!.tagName.toLowerCase() === "span" && content.endsWith(" €")
        );
      });
      const firstClothesAfterOrder = allClothesAfterOrder[0];
      expect(firstClothesAfterOrder.textContent).toEqual("23,99 €");
    });

    it("should order clothes by price descending", () => {
      render(<Home clothes={clothesMock} />);

      const firstClothesBeforeOrder = clothesMock[0];
      expect(firstClothesBeforeOrder.price).toEqual(23.99);

      userEvent.selectOptions(
        screen.getByRole("combobox"),
        screen.getByRole("option", { name: "Precio descendente" })
      );

      const optionSelectedText = screen.getByRole("option", {
        selected: true,
      }).textContent;
      expect(optionSelectedText).toBe("Precio descendente");

      const allClothesAfterOrder = screen.getAllByText((content, element) => {
        return (
          element!.tagName.toLowerCase() === "span" && content.endsWith(" €")
        );
      });
      const firstClothesAfterOrder = allClothesAfterOrder[0];
      expect(firstClothesAfterOrder.textContent).toEqual("33,99 €");
    });
  });

  describe("Search text", () => {
    it("should filter clothes by text", () => {
      expect.assertions(1);
      jest.useFakeTimers();

      render(<Home clothes={clothesMock} />);

      const searchInput = screen.getByPlaceholderText("Buscar");
      fireEvent.change(searchInput, { target: { value: "panta" } });

      setTimeout(() => {
        const clothesFiltered = screen.getByText("Pantalón largo chino");
        expect(clothesFiltered).toBeInTheDocument();
      }, IDLE_TIMEOUT_ON_INPUTS);

      act(() => {
        jest.runAllTimers();
      });
    });
  });
});
