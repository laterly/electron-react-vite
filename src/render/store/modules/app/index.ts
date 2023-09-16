import { makeAutoObservable } from "mobx";

export class App {
  count: number = 0;
  constructor() {
    makeAutoObservable(this);
  }
  setCount(data: number) {
    this.count = data;
  }
}
