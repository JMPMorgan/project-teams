const URL = "http://localhost:8000";

export const signUp = async ({ commit }, data) => {
  console.log(commit);
  console.log(data);
  const response = await fetch(URL + "/api/user/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  if (response.status === 200) {
    return {
      isLogged: true,
    };
  }

  const jsondata = await response.json();
  return {
    isLogged: false,
    errors: jsondata,
  };
};

export const logIn = async ({ commit }, data) => {
  const response = await fetch(URL + "/api/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  if (response.status === 200) {
    commit("setJWT", json);
    return {
      isLogged: true,
    };
  }
  return {
    isLogged: true,
    errors: json,
  };
};
export const getUserInfo = async ({ commit }, data) => {
  console.log(commit);
  console.log(data);

  const response = await fetch(URL + "/api/user/token", {
    method: "GET",
    headers: {
      token: data,
      "Content-Type": "application/json",
    },
  });
  if (response.status === 200) {
    const data = await response.json();
    return {
      name: data.user.name,
      lastname: data.user.lastname,
      username: data.user.username,
    };
  }
  return false;
};
