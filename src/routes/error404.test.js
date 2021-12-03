import React from "react";
import { render, screen } from "test-utils";

import Error404 from "./error404";

test("render with sucess", () => {
  render(<Error404 />);
  expect(screen.getByText("Página não encontrada")).toBeInTheDocument();
});
