import { configureStore } from "@reduxjs/toolkit";

import spinner from "./spinner";
import auth from "./auth";
import language from "./language";
import notice from "./notice";

export const store = configureStore({
  reducer: {
    spinner,
    auth,
    language,
    notice,
  },
});
