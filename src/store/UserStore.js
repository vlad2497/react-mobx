import { decorate, observable, action } from "mobx";

class UserStore {
  userName = "Vlad";

  setUserName(value) {
    this.userName = value;
  }
}

decorate(UserStore, {
  userName: observable,
  setUserName: action,
});

export default new UserStore();
