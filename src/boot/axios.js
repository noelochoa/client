import axios from "axios";
import inject from "./inject";
import createAuthRefreshInterceptor from "axios-auth-refresh";

export default inject(async function({ store, ssrContext }) {
  const instance = axios.create({
    baseURL: process.env.API,
    withCredentials: true
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
      if (store.state.basket && !!store.state.basket.basket_xsrf) {
        config.headers["x-csrf-cart"] = store.state.basket.basket_xsrf;
        config.skipAuthRefresh = true;
      } else {
        delete config.headers["x-csrf-cart"];
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (
        error.response.status === 401 &&
        error.config.url.indexOf("/api/basket") !== -1
      ) {
        store.dispatch("basket/resetCart");
      }

      if (
        error.response.status === 403 ||
        error.config.url.indexOf("/api/profile/refresh") !== -1
      ) {
        store.dispatch("auth/resetAuth");
        // redirect("/account");
      }

      return Promise.reject(error);
    }
  );

  const refreshAuthLogic = fReq =>
    instance.post("/api/profile/refresh").then(resp => {
      // Renew CSRF Token
      if (resp.data && resp.data.xsrf) {
        store.dispatch("auth/setXSRFToken", resp.data.xsrf);
      }
      return Promise.resolve();
    });

  createAuthRefreshInterceptor(instance, refreshAuthLogic);

  return {
    axios: instance
  };
});
