import {
  action,
  makeObservable,
  observable
} from "mobx";


export default class CartStore {
  @observable cartItems: Entity.CartItems = [];

  constructor(cartItems: Entity.CartItems) {
    this.setCartItems(cartItems);
    makeObservable(this);
  }

  @action
  setCartItems = (cartItems: Entity.CartItems) => {
    this.cartItems = cartItems;
  }

  @action
  clear = () => {
    this.cartItems = [];
  }

  @action
  add = (cartItem: Entity.CartItem) => {
    this.cartItems.push(cartItem);
  }

  @action
  delete = (cartItem: Entity.CartItem) => {
    this.cartItems = this.cartItems.filter((_cartItem) => {
      return cartItem.id !== _cartItem.id;
    });
  }

  get count(): number {
    return this.cartItems.length;
  }

  get priceTotalDollars(): string {
    return "$" +(this.priceTotal / 100).toFixed(2);
  }

  get priceTotal(): number {
    let total = 0;
    this.cartItems.forEach((item) => {
      if(item.product.specialInCents){
        total+=item.product.specialInCents 
      } else {
        total+=item.product.priceInCents;
      }
    });
    return total;
  }
}
