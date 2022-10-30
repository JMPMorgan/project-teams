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

export const getMessages = async ({ commit }, data) => {
  console.log(commit);
  const response = await fetch(
    URL + `/api/group/${data.id}?loadMessages=true`,
    {
      method: "GET",
      headers: {
        token: data.token,
        "Content-Type": "application/json",
      },
    }
  );

  console.log(response);
  if (response.status !== 200) {
    return;
  }
  const json = await response.json();
  commit("setMessages", json.messages);
};

export const sendMessage = async ({ commit }, data) => {
  const response = await fetch(URL + `/api/message/`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      token: data.token,
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  const messageData = {
    message: json.message.message,
    _id: json.message._id,
    from: json.from,
    situation: json.situation,
  };
  commit("addNewMessage", messageData);
};

export const searchUsers = async ({ commit }, data) => {
  const response = await fetch(URL + `/api/user/search/${data.name}`, {
    headers: {
      token: data.token,
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  console.log(commit);
  const { users } = await response.json();
  commit("setUsers", users);
};

export const addUserToGroup = async ({ commit }, data) => {
  const response = await fetch(URL + "/api/group/adduser", {
    method: "POST",
    headers: {
      token: data.token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(response);
  const json = await response.json();
  console.log(json);
  console.log(commit);
};

export const createNewConversation = async ({ commit }, data) => {
  console.log(commit);
  const response = await fetch(URL + "/api/message/newconversation", {
    method: "POST",
    headers: {
      token: data.token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(response);
  const json = await response.json();
  console.log(json);
};

export const getMessagesPerUser = async ({ commit }, data) => {
  console.log(commit);
  const response = await fetch(URL + "/api/message/", {
    headers: {
      token: data.token,
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  const json = await response.json();
  console.log(json);
  commit("setMessages", json.conversations);
};

export const sendMessageToUser = async ({ commit }, data) => {
  const response = await fetch(URL + "/api/message/", {
    method: "POST",
    headers: {
      token: data.token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  const messageData = {
    message: json.message.message,
    _id: json.message._id,
    from: json.message.sender.username,
    situation: json.message.situation,
  };
  commit("addNewMessage", messageData);
};

export const getConversationPerUser = async ({ commit }, data) => {
  console.log(commit);
  const response = await fetch(URL + `/api/message/${data.id}`, {
    headers: {
      token: data.token,
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  const json = await response.json();
  console.log(json);
  commit("setMessages", json.messages);
};
