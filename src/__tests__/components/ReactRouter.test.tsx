import React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen } from "utils/test-utils";
import App from "App";

describe("ReactRouter", () => {
  test("should render dashboard page", () => {
    render(<App />);

    screen.getByRole("heading", { name: "Now playing" });
  });

  test("should navigate to movies page", () => {
    render(<App />);

    userEvent.click(screen.getByRole("link", { name: "Movies" }));
    screen.getByPlaceholderText("Start release date");
  });

  test("should navigate to random movie page", () => {
    render(<App />);

    userEvent.click(screen.getByRole("link", { name: "Random movie" }));
    screen.getByPlaceholderText("Start release date");
  });

  test("should navigate to dashboard page", () => {
    render(<App />);

    userEvent.click(screen.getByRole("link", { name: "Dashboard" }));
    screen.getByRole("heading", { name: "Now playing" });
  });

  test("should navigate to movie details page", async () => {
    render(<App />);

    const movieCard = await screen.findByRole("link", { name: "Spider-Man: No Way Home" });

    userEvent.click(movieCard);
    await screen.findByRole("heading", { level: 3, name: "Spider-Man: No Way Home" });
  });
});
