export const setJWT = (state, data) => {
  state.jwt = data.token;
  state.isLoggin = true;
};
