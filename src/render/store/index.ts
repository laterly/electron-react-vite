import { configure } from "mobx";
import { App } from "./modules/app";
import { User } from "./modules/user";

configure({
  enforceActions: "observed",
});
const appStore = new App();
const userStore = new User();

export { appStore, userStore };
