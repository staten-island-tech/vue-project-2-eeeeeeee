import { createStore } from "vuex";
import { auth } from "../config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const store = createStore({
  state: {
    user: null,
    authUser: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log("User State Changed:", state.user);
    },
    setAuthUser(state, payload) {
      state.authUser = payload;
    },
  },
  actions: {
    async signup(context, { email, password }) {
      console.log("Signup");

      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("Signup Error");
      }
    },
    async login(context, { email, password }) {
      console.log("Login");

      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("Login Error");
      }
    },
    async logout(context) {
      console.log("Signout");

      await signOut(auth);
      context.commit("setUser", null);
    },
  },
});

const unsub = onAuthStateChanged(auth, (user) => {
  store.commit("setAuthUser", true);
  store.commit("setUser", user);
  unsub();
});

export default store;
