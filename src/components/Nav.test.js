import { screen, render } from "@testing-library/react";
import Nav from "./Nav";

it("should be render nav text", () => {
  render(<Nav/>);
  const navText = screen.getByText("Ini section nav");
  expect(navText).toBeInTheDocument();
})