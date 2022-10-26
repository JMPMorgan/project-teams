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
