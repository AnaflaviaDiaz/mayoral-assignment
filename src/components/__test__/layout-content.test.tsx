import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { LayoutContent } from "../LayoutContent";

describe("LayoutContent", () => {
  it("should render LayoutContent", () => {
    render(
      <LayoutContent>test</LayoutContent>
    );
    const childrenTest = screen.getByText("test");

    expect(childrenTest).toBeInTheDocument();
  });
});