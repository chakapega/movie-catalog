import React from "react";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { render as rtlRender } from "@testing-library/react";

import { store as configuredStore } from "store";

const render = (ui: React.ReactElement, { store = configuredStore, ...renderOptions } = {}) => {
  const Wrapper: React.ComponentType<{}> = ({ children }) => {
    const history = createMemoryHistory();

    return (
      <Provider store={store}>
        <Router history={history}>{children}</Router>
      </Provider>
    );
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";
export { render };
