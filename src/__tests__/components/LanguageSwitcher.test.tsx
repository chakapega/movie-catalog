import React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen } from "utils/test-utils";
import { Header } from "features/Header/Header.component";
import App from "App";

describe("LanguageSwitcher component", () => {
  test("should render language switcher", () => {
    render(<Header />);

    screen.getByTestId("language-select");
  });

  test("should change value of language select and change translations", async () => {
    render(<App />);

    const languageSelect = screen.getByTestId("language-select");

    screen.getByRole("link", { name: "Dashboard" });
    userEvent.selectOptions(languageSelect, "ru");
    expect(languageSelect).toHaveValue("ru");
    await screen.findByRole("link", { name: "Обзорная панель" });
  });
});
