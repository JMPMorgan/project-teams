export const setGroups = (state, groups) => {
  console.log(groups);
  //if(groups);
  const allgroups = groups.map((group) => group.group);
  console.log(allgroups);
  state.groups = allgroups;
};

export const setGroup = (state, group) => {
  if (state.groups) {
    state.groups = [...state.groups, group];
    return;
  }
  state.groups = group;
};

export const setMessages = (state, messages) => {
  state.isLoading = true;
  state.messages = messages;
  state.isLoading = false;
  console.log(state.messages);
};

export const setUsers = (state, users) => {
  state.users = users;
  state.hasUsers = false;
  if (users.length > 0) {
    state.hasUsers = true;
  }
};

export const addNewMessage = (state, message) => {
  //console.log(message);
  state.messages.push(message);
};
