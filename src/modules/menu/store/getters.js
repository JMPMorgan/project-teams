export const getGroupByID =
  (state) =>
  (id = "") => {
    const group = state.groups.find((group) => group._id === id);
    if (!group) {
      return undefined;
    }
    return { ...group };
  };
