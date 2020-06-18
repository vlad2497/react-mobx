import { createContext } from "react";
import UserStore from "./UserStore";
import ThemeStore from "./ThemeStore";

const store = {
  userStore: UserStore,
  themeStore: ThemeStore,
};

const context = createContext();

export const StoreProvider = context.Provider;
export const StoreContext = context;

export default store;
