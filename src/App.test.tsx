import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the spec image", () => {
  render(<App />);

  expect(screen.getByAltText(/Ordered list app/i)).toBeInTheDocument();
});
