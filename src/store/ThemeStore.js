import { decorate, observable, action } from "mobx";

class ThemeStore {
  color = "black";

  setColor(value) {
    this.color = value;
  }
}

decorate(ThemeStore, {
  color: observable,
  setColor: action,
});

export default new ThemeStore();
