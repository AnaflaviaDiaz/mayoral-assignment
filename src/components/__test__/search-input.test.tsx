import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { SearchInput } from "../SearchInput";

describe("SearchInput", () => {
  it("should render SearchInput", () => {
    render(<SearchInput handleChange={jest.fn()} />);

    const searchInput = screen.getByPlaceholderText("Buscar");
    expect(searchInput).toBeInTheDocument();
  });
});
