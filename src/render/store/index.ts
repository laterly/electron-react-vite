import { configure } from "mobx";
import { App } from "./modules/app";
import { User } from "./modules/user";

configure({
  enforceActions: "observed",
});
const store = {
  appStore: new App(),
  userStore: new User(),
};

export default store;
