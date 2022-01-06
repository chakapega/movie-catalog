import React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen } from "utils/test-utils";
import { Header } from "features/Header/Header.component";

describe("Header component", () => {
  test("should render navbar links", () => {
    render(<Header />);

    screen.getByText("Dashboard");
    screen.getByText("Movies");
    screen.getByText("Random movie");
  });

  test("should render language switcher", () => {
    render(<Header />);

    const languageSelect = screen.getByTestId("language-switcher-select");

    expect(languageSelect).toHaveValue("en");
  });

  test("should change value of language select", () => {
    render(<Header />);

    const languageSelect = screen.getByTestId("language-switcher-select");

    userEvent.selectOptions(languageSelect, "ru");
    expect(languageSelect).toHaveValue("ru");
  });

  test("should render log in button", () => {
    render(<Header />);

    screen.getByRole("button", { name: "Log In" });
  });
});
