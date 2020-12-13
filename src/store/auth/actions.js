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
      err.response ? err.response.data.error : "Unexpected error has occurred."
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
      err.response ? err.response.data.error : "Unexpected error has occurred."
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
      err.response ? err.response.data.error : "Unexpected error has occurred."
    );
  } finally {
    commit("RESET_AUTH");
  }
}

export async function fetchProfile({ commit }) {
  let resp;
  try {
    resp = await this.$axios.get("/api/profile");
    if (resp && resp.data) {
      // Refresh
      commit("SET_USER_AUTH", resp.data.customer);
      return resp.data.customer;
    }
    return {};
  } catch (err) {
    return Promise.reject(
      err.response ? err.response.data.error : "Unexpected error has occurred."
    );
  }
}

export async function fetchOrders({}) {
  let resp;
  try {
    resp = await this.$axios.get("/api/orders");
    if (resp && resp.data) {
      return resp.data;
    }
    return [];
  } catch (err) {
    return Promise.reject(
      err.response ? err.response.data.error : "Unexpected error has occurred."
    );
  }
}

export async function fetchOrderDetails({}, { orderID }) {
  let resp;
  try {
    resp = await this.$axios.get(`/api/orders/${orderID}`);
    if (resp && resp.data) {
      return resp.data;
    }
    return null;
  } catch (err) {
    return Promise.reject(
      err.response ? err.response.data.error : "Unexpected error has occurred."
    );
  }
}

export async function cancelOrder({}, { orderID }) {
  let resp;
  try {
    resp = await this.$axios.patch(`/api/orders/${orderID}`);
    return true;
  } catch (err) {
    return Promise.reject(
      err.response ? err.response.data.error : "Unexpected error has occurred."
    );
  }
}

export async function editProfile(
  { state },
  { firstname, lastname, address, phonenumber, notification }
) {
  let resp;
  try {
    resp = await this.$axios.patch("/api/profile", [
      { property: "firstname", value: firstname },
      { property: "lastname", value: lastname },
      { property: "address", value: address },
      { property: "phonenumber", value: phonenumber },
      { property: "notification", value: notification }
    ]);
    if (resp && resp.data) {
      return resp.data.message;
    }
    return Promise.reject("No response received.");
  } catch (err) {
    return Promise.reject(
      err.response ? err.response.data.error : "Unexpected error has occurred."
    );
  }
}

export async function sendSMS({}) {
  let resp;
  try {
    resp = await this.$axios.post("/api/profile/smstoken");
    return true;
  } catch (err) {
    return Promise.reject(
      err.response ? err.response.data.error : "Unexpected error has occurred."
    );
  }
}

export async function sendCode({}) {
  let resp;
  try {
    resp = await this.$axios.post("/api/profile/token");
    return true;
  } catch (err) {
    return Promise.reject(
      err.response ? err.response.data.error : "Unexpected error has occurred."
    );
  }
}

export async function verify({}, { email, token }) {
  let resp;
  try {
    resp = await this.$axios.post("/api/profile/verify", {
      email,
      token: token.toUpperCase()
    });
    if (resp && resp.data) {
      return resp.data.message;
    }
    return Promise.reject("No response received.");
  } catch (err) {
    return Promise.reject(
      err.response ? err.response.data.error : "Unexpected error has occurred."
    );
  }
}

export async function verifySMS({}, { token }) {
  let resp;
  try {
    resp = await this.$axios.post("/api/profile/smsverify", {
      token: token.toUpperCase()
    });
    if (resp && resp.data) {
      return resp.data.message;
    }
    return Promise.reject("No response received.");
  } catch (err) {
    return Promise.reject(
      err.response ? err.response.data.error : "Unexpected error has occurred."
    );
  }
}

export async function sendResetToken({}, { email }) {
  let resp;
  try {
    resp = await this.$axios.post("/api/profile/password/reset", {
      email
    });
    if (resp && resp.data) {
      return resp.data.message;
    }
    return Promise.reject("No response received.");
  } catch (err) {
    return Promise.reject(
      err.response ? err.response.data.error : "Unexpected error has occurred."
    );
  }
}

export async function changePW({}, { token, newpass, email }) {
  let resp;
  try {
    resp = await this.$axios.patch("/api/profile/password/reset", {
      token: token.toUpperCase(),
      newpass,
      email
    });
    if (resp && resp.data) {
      return resp.data.message;
    }
    return Promise.reject("No response received.");
  } catch (err) {
    return Promise.reject(
      err.response ? err.response.data.error : "Unexpected error has occurred."
    );
  }
}
