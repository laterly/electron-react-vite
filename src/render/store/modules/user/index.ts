import { makeAutoObservable } from "mobx";

export class User {
  userName: string = "";
  constructor() {
    makeAutoObservable(this);
  }
  setUserName(data: string) {
    this.userName = data;
  }
}
