export function setXSRFToken({ commit }, xsrf) {
  commit("SET_XSRF_AUTH", xsrf);
}

export function resetAuth({ commit }) {
  commit("RESET_AUTH");
}

export async function signin({ commit }, { email, password }) {
  let resp;
  try {
    resp = await this.$axios.post("/api/profile/login", {
      email,
      password
    });
    if (resp && resp.data) {
      commit("SET_USER_AUTH", resp.data.user);
      commit("SET_XSRF_AUTH", resp.data.xsrf);
      commit("SET_BOOL_AUTH", true);
    }
    return true;
  } catch (err) {
    return Promise.reject(
      err.response.data.error || "Unexpected error has occurred."
    );
  }
}

export async function register(
  { commit },
  { email, password, firstname, lastname, reseller }
) {
  let resp;
  try {
    resp = await this.$axios.post("/api/profile/register", {
      email,
      password,
      firstname,
      lastname,
      accountType: reseller ? "reseller" : "regular"
    });
    if (resp && resp.data) {
      commit("SET_USER_AUTH", resp.data.user);
      commit("SET_XSRF_AUTH", resp.data.xsrf);
      commit("SET_BOOL_AUTH", true);
    }
    return true;
  } catch (err) {
    return Promise.reject(
      err.response.data.error || "Unexpected error has occurred."
    );
  }
}

export async function signout({ commit }) {
  let resp;
  try {
    resp = await this.$axios.post("/api/profile/logout");
    return true;
  } catch (err) {
    return Promise.reject(
      err.response.data.error || "Unexpected error has occurred."
    );
  } finally {
    commit("RESET_AUTH");
  }
}

export async function fetchProfileDetails({}) {
  let resp;
  try {
    resp = await this.$axios.get("/api/profile");
    if (resp && resp.data) {
      return resp.data.customer;
    }
    return {};
  } catch (err) {
    return Promise.reject(
      err.response.data.error || "Unexpected error has occurred."
    );
  }
}
