import React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen, fireEvent } from "utils/test-utils";
import { RandomMovie } from "features/RandomMovie/RandomMovie.component";

describe("RandomMovie component", () => {
  test("should render select with genres", async () => {
    render(<RandomMovie />);

    await screen.findByText("Genre");
    await screen.findByRole("option", { name: "Action" });
    await screen.findByRole("option", { name: "Adventure" });
    await screen.findByRole("option", { name: "Animation" });
  });

  test("should render select with providers", async () => {
    render(<RandomMovie />);

    await screen.findByText("Provider");
    await screen.findByRole("option", { name: "Netflix" });
    await screen.findByRole("option", { name: "Hotstar" });
    await screen.findByRole("option", { name: "Fetch TV" });
  });

  test("should render datepickers", () => {
    render(<RandomMovie />);

    screen.getByPlaceholderText("Start release date");
    screen.getByPlaceholderText("End release date");
  });

  test("should render button Apply", () => {
    render(<RandomMovie />);

    screen.getByRole("button", { name: "Apply" });
  });

  test("should change value of genre select", async () => {
    render(<RandomMovie />);

    const genresSelect = await screen.findByTestId("genres-select");

    expect(genresSelect).toHaveValue("");
    userEvent.selectOptions(genresSelect, "Action");
    expect(genresSelect).toHaveValue("28");
  });

  test("should change value of provider select", async () => {
    render(<RandomMovie />);

    const providersSelect = await screen.findByTestId("providers-select");

    expect(providersSelect).toHaveValue("");
    userEvent.selectOptions(providersSelect, "Netflix");
    expect(providersSelect).toHaveValue("8");
  });

  test("should change value of datepicker start date", () => {
    render(<RandomMovie />);

    const datepickerStartDate = screen.getByPlaceholderText("Start release date");

    expect(datepickerStartDate).toHaveValue("");
    fireEvent.change(datepickerStartDate, { target: { value: "01/11/2021" } });
    expect(datepickerStartDate).toHaveValue("01/11/2021");
  });

  test("should change value of datepicker end date", () => {
    render(<RandomMovie />);

    const datepickerEndDate = screen.getByPlaceholderText("End release date");

    expect(datepickerEndDate).toHaveValue("");
    fireEvent.change(datepickerEndDate, { target: { value: "01/05/2022" } });
    expect(datepickerEndDate).toHaveValue("01/05/2022");
  });

  test("should reset value of datepicker start date after click reset button", () => {
    const { container } = render(<RandomMovie />);
    const datepickerStartDate = screen.getByPlaceholderText("Start release date");

    fireEvent.change(datepickerStartDate, { target: { value: "01/11/2021" } });
    userEvent.click(container.querySelector(".react-datepicker__close-icon")!);
    expect(datepickerStartDate).toHaveValue("");
  });

  test("should reset value of datepicker end date after click reset button", () => {
    const { container } = render(<RandomMovie />);
    const datepickerEndDate = screen.getByPlaceholderText("End release date");

    fireEvent.change(datepickerEndDate, { target: { value: "01/05/2022" } });
    userEvent.click(container.querySelector(".react-datepicker__close-icon")!);
    expect(datepickerEndDate).toHaveValue("");
  });

  test("should render movie details, cast, recommendation movies after click apply button", async () => {
    render(<RandomMovie />);

    const genresSelect = await screen.findByTestId("genres-select");
    const providersSelect = await screen.findByTestId("providers-select");
    const datepickerStartDate = screen.getByPlaceholderText("Start release date");
    const datepickerEndDate = screen.getByPlaceholderText("End release date");
    const buttonApply = screen.getByRole("button", { name: "Apply" });

    userEvent.selectOptions(genresSelect, "Action");
    userEvent.selectOptions(providersSelect, "Netflix");
    fireEvent.change(datepickerStartDate, { target: { value: "01/11/2021" } });
    fireEvent.change(datepickerEndDate, { target: { value: "01/05/2022" } });
    userEvent.click(buttonApply);

    await screen.findByRole("heading", { level: 3, name: "The Amazing Spider-Man" });
    await screen.findByText("Andrew Garfield");
    await screen.findByText("Spider-Man: No Way Home");
  });
});
