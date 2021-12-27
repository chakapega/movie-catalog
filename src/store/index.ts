import { configureStore } from "@reduxjs/toolkit";

import account from "./account";
import auth from "./auth";
import language from "./language";
import notice from "./notice";
import spinner from "./spinner";
import { accountApi } from "features/Account/Account.api";
import { authApi } from "features/Auth/Auth.api";
import { dashboardApi } from "features/Dashboard/Dashboard.api";
import { filtersApi } from "features/Filters/Filters.api";

export const store = configureStore({
  reducer: {
    account,
    auth,
    language,
    notice,
    spinner,
    [accountApi.reducerPath]: accountApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [filtersApi.reducerPath]: filtersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      accountApi.middleware,
      authApi.middleware,
      dashboardApi.middleware,
      filtersApi.middleware
    ),
});
