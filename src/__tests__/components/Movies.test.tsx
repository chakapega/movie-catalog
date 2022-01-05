import React from "react";

import { render, screen, fireEvent } from "utils/test-utils";
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

  test("should change value of genre select", async () => {
    render(<Movies />);

    const genresSelect = await screen.findByTestId("genres-select");

    expect(genresSelect).toHaveValue("");
    fireEvent.change(genresSelect, { target: { value: "28" } });
    expect(genresSelect).toHaveValue("28");
  });

  test("should change value of provider select", async () => {
    render(<Movies />);

    const providersSelect = await screen.findByTestId("providers-select");

    expect(providersSelect).toHaveValue("");
    fireEvent.change(providersSelect, { target: { value: "8" } });
    expect(providersSelect).toHaveValue("8");
  });

  test("should change value of datepicker start date", () => {
    render(<Movies />);

    const datepickerStartDate = screen.getByPlaceholderText("Start release date");

    expect(datepickerStartDate).toHaveValue("");
    fireEvent.change(datepickerStartDate, { target: { value: "01/11/2021" } });
    expect(datepickerStartDate).toHaveValue("01/11/2021");
  });

  test("should change value of datepicker end date", () => {
    render(<Movies />);

    const datepickerEndDate = screen.getByPlaceholderText("End release date");

    expect(datepickerEndDate).toHaveValue("");
    fireEvent.change(datepickerEndDate, { target: { value: "01/05/2022" } });
    expect(datepickerEndDate).toHaveValue("01/05/2022");
  });

  test("should reset value of datepicker start date after click reset button", () => {
    const { container } = render(<Movies />);
    const datepickerStartDate = screen.getByPlaceholderText("Start release date");

    fireEvent.change(datepickerStartDate, { target: { value: "01/11/2021" } });
    fireEvent.click(container.querySelector(".react-datepicker__close-icon")!);
    expect(datepickerStartDate).toHaveValue("");
  });

  test("should reset value of datepicker end date after click reset button", () => {
    const { container } = render(<Movies />);
    const datepickerEndDate = screen.getByPlaceholderText("End release date");

    fireEvent.change(datepickerEndDate, { target: { value: "01/05/2022" } });
    fireEvent.click(container.querySelector(".react-datepicker__close-icon")!);
    expect(datepickerEndDate).toHaveValue("");
  });
});
