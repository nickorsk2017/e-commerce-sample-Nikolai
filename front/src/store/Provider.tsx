"use client";
import {createContext, PropsWithChildren} from "react";
import UserDataStore from "@/store/UserDataStore";

export const MobxContext = createContext<any>(null);

export type Props = PropsWithChildren<{
  userData?: Entity.UserData
}>;

type Store = {
  userStore?: UserDataStore | null;
}

let mainStore: Store = {
  userStore: null,
}

const Provider: React.FC<Props> = ({userData, children}) => {
  //mainStore.userStore = new UserDataStore(userData);
  return (
    <MobxContext.Provider value={mainStore}>
      {children}
    </MobxContext.Provider>
  );
};

export default Provider;