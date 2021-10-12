import { configureStore } from "@reduxjs/toolkit";

import spinner from "./spinner";
import auth from "./auth";
import language from "./language";
import notice from "./notice";
import { accountApi } from "features/Account/Account.api";

export const store = configureStore({
  reducer: {
    spinner,
    auth,
    language,
    notice,
    [accountApi.reducerPath]: accountApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(accountApi.middleware),
});
