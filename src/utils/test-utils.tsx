import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render as rtlRender } from "@testing-library/react";

import { store as configuredStore } from "store";

const render = (ui: React.ReactElement, { store = configuredStore, ...renderOptions } = {}) => {
  const Wrapper: React.ComponentType = ({ children }) => (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";
export { render };
