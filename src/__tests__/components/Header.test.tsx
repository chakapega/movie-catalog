import React from "react";

import { render, screen } from "utils/test-utils";
import { Header } from "features/Header/Header.component";

describe("Header component", () => {
  test("should render navbar links", () => {
    render(<Header />);

    screen.getByRole("link", { name: "Dashboard" });
    screen.getByRole("link", { name: "Movies" });
    screen.getByRole("link", { name: "Random movie" });
  });

  test("should render language switcher", () => {
    render(<Header />);

    screen.getByTestId("language-select");
  });

  test("should render log in button", () => {
    render(<Header />);

    screen.getByRole("button", { name: "Log In" });
  });
});
