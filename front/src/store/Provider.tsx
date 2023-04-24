"use client";
import {createContext, PropsWithChildren} from "react";
import CartStore from "@/store/CartStore";

export const MobxContext = createContext<any>(null);

export type Props = PropsWithChildren<{
  cartItems: Entity.CartItems
}>;

type Store = {
  cartStore?: CartStore | null;
}

let mainStore: Store = {
  cartStore: null,
}

const Provider: React.FC<Props> = ({cartItems, children}) => {
  mainStore.cartStore = new CartStore(cartItems);
  return (
    <MobxContext.Provider value={mainStore}>
      {children}
    </MobxContext.Provider>
  );
};

export default Provider;