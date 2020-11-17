// import { Cookies } from "quasar";
import axios from "axios";
import inject from "./inject";
// import createAuthRefreshInterceptor from "axios-auth-refresh";

export default inject(async function({ app, store, ssrContext, redirect }) {
  const instance = axios.create({
    baseURL: process.env.API
  });

  instance.interceptors.request.use(
    config => {
      if (!!ssrContext) {
        config.headers = ssrContext.req.headers;
        // config.skipAuthRefresh = true;
      }
      if (store.state.auth && store.state.auth.authenticated) {
        config.headers["x-csrf-token"] = store.state.auth.xsrf;
      } else {
        delete config.headers["x-csrf-token"];
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  return {
    axios: instance
  };
});
