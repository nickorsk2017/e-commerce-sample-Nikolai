import { makeAutoObservable } from "mobx";

class UserDataStore {
  _userData: Entity.UserData | null = null;
  constructor(userData: Entity.UserData) {
    this.setUserData(userData);
    makeAutoObservable(this);
  }

  setUserData = (userData: Entity.UserData) => (this._userData = userData);

  get userData() {
    return this._userData;
  }

  hydrate = (data: any) => {
    if (!data) return;
    this.setUserData(data.userData);
  };
}

export default UserDataStore;