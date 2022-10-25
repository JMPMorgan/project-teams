import { createStore } from "vuex";
import authModule from "@/modules/auth/store";

const store = createStore({
  modules: {
    authModule,
  },
});

export default store;
