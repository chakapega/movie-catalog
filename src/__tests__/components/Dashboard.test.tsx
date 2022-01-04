import React from "react";

import { render, screen } from "utils/test-utils";
import { Dashboard } from "features/Dashboard/Dashboard.component";

describe("Dashboard component", () => {
  test("should render headings", () => {
    render(<Dashboard />);

    screen.getByRole("heading", { name: "Now playing" });
    screen.getByRole("heading", { name: "Upcoming" });
    screen.getByRole("heading", { name: "Popular" });
  });

  test("should render movies cards with links", async () => {
    render(<Dashboard />);

    await screen.findAllByRole("link", { name: "Spider-Man: No Way Home" });
    await screen.findAllByRole("link", { name: "The Matrix Resurrections" });
    await screen.findAllByRole("link", { name: "Resident Evil: Welcome to Raccoon City" });
  });
});
