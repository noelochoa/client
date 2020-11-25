import { Cookies } from "quasar";
import createPersistedState from "vuex-persistedstate";

export default async ({ store, ssrContext }) => {
  const cookies = process.env.SERVER ? Cookies.parseSSR(ssrContext) : Cookies;

  createPersistedState({
    key: "_VUEX_AUTH_WEB",
    paths: ["auth"],
    storage: {
      getItem: key => JSON.stringify(cookies.get(key)),
      setItem: (key, value) => {
        cookies.set(key, value, {
          path: "/",
          sameSite: "Lax",
          expires: 7,
          secure: !process.env.DEV
        });
      },
      removeItem: key => cookies.remove(key)
    }
  })(store);
};
