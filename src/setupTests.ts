import "@testing-library/jest-dom";

import { server } from "mocks/server";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

jest.mock("react-i18next", () => ({
  useTranslation: () => {
    return {
      t: (str: string): string => str,
    };
  },
}));
