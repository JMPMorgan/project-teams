const URL = "http://localhost:8000";

export const createNewGroup = async ({ commit }, data) => {
  console.log(commit);
  console.log(data);
  console.log(URL);

  const response = await fetch(URL + "/api/group/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      token: data.jwt,
      "Content-Type": "application/json",
    },
  });

  console.log(response);
  const json = await response.json();
  console.log(json);
  commit("setGroup", json.group);
};

export const loadGroups = async ({ commit }, data) => {
  console.log(commit);
  const response = await fetch(URL + "/api/group/", {
    method: "GET",
    headers: {
      token: data,
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  const groups = await response.json();
  console.log(groups);
  commit("setGroups", groups.groups);
};
