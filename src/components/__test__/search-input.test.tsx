import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { SearchInput } from "../SearchInput";

describe("SearchInput", () => {
  it("should render SearchInput", () => {
    render(<SearchInput handleChange={() => {}} />);

    const searchInput = screen.getByPlaceholderText("Buscar");
    expect(searchInput).toBeInTheDocument();
  });
});
