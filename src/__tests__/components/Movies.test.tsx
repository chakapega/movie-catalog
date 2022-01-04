import React from "react";

import { render, screen } from "utils/test-utils";
import { Movies } from "features/Movies/Movies.component";

describe("Movies component", () => {
  test("should render select with genres", async () => {
    render(<Movies />);

    await screen.findByText("Genre");
    await screen.findByRole("option", { name: "Action" });
    await screen.findByRole("option", { name: "Adventure" });
    await screen.findByRole("option", { name: "Animation" });
  });

  test("should render select with providers", async () => {
    render(<Movies />);

    await screen.findByText("Provider");
    await screen.findByRole("option", { name: "Netflix" });
    await screen.findByRole("option", { name: "Hotstar" });
    await screen.findByRole("option", { name: "Fetch TV" });
  });

  test("should render datepickers", () => {
    render(<Movies />);

    screen.getByPlaceholderText("Start release date");
    screen.getByPlaceholderText("End release date");
  });

  test("should render button Apply", () => {
    render(<Movies />);

    screen.getByRole("button", { name: "Apply" });
  });
});
