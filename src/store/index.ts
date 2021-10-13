import { configureStore } from "@reduxjs/toolkit";

import account from "./account";
import auth from "./auth";
import language from "./language";
import notice from "./notice";
import spinner from "./spinner";
import { accountApi } from "features/Account/Account.api";
import { authApi } from "features/Auth/Auth.api";

export const store = configureStore({
  reducer: {
    account,
    auth,
    language,
    notice,
    spinner,
    [accountApi.reducerPath]: accountApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(accountApi.middleware, authApi.middleware),
});
