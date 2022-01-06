import "@testing-library/jest-dom";
import i18next from "i18next";

import "i18n";
import { Language } from "constants/language";
import { server } from "mocks/server";

i18next.changeLanguage(Language.english);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
