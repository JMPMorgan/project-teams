export const getUserInfo = (state) => {
  const jwt = state.jwt;
  return jwt;
};

/*
export const getEntriesByTerm =
  (state) =>
  (term = "") => {
    if (term.length === 0) return state.entries;
    return state.entries.filter((entry) =>
      entry.text.toLowerCase().includes(term.toLowerCase())
    );
  };

export const getEntriesByID =
  (state) =>
  (id = "") => {
    const entry = state.entries.find((entry) => entry.id === id);
    if (!entry) {
      return undefined;
    }
    return { ...entry };
  };*/