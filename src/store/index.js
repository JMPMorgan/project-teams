import { createStore } from "vuex";
import authModule from "@/modules/auth/store";
import groupModule from "@/modules/menu/store";

const store = createStore({
  modules: {
    authModule,
    groupModule,
  },
});

export default store;
