import Vue from "vue";
import Vuex from "vuex";

import home from "./home";
import gallery from "./gallery";
import buy from "./buy";
import basket from "./basket";
import auth from "./auth";

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      home,
      gallery,
      buy,
      basket,
      auth
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  });

  return Store;
}
