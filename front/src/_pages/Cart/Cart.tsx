"use client"
import CartItemsList from "./_components/List/List";
import {useState} from "react";
import {useStore} from '@/utils';
import Button from "@/ui/Button/Button";
import {observer} from "mobx-react";
import cartAPI from "@/api/cart";
import styles from "./Cart.module.scss";

export type Props = {};

const CartPage: React.FC<Props> = () => {
  const {cartStore} = useStore();
  const [orderId, setOrderId] = useState(null);

  const checkout = async () => {
    const result = await cartAPI.cart.checkout(cartStore.cartItems);
    if(result.orderId){
      setOrderId(result.orderId);
      cartStore.clear();
    }
  }

  return <div className={styles.cart}>
    <h1 className={styles.cart_header}>My Order</h1>
    {!orderId && !cartStore.priceTotal && <div className={styles.cart_empty}>
      Cart is empty
    </div>}
    {!orderId && cartStore.priceTotal > 0 && <div className={styles.cart_body}>
      <div className={styles.cart_left}>
        <CartItemsList/>
      </div>
      <div className={styles.cart_right}>
        <div className={styles.cart_total}>
          <span>Total</span> <span>{cartStore.priceTotalDollars}</span>
        </div>
        <Button className={styles.cart_checkout} onClick={checkout}>Checkout</Button>
      </div>
    </div>}

    {orderId && <div className={styles.cart_order}>
      <h2>Congratulations!</h2>
      Order number <span>{orderId}</span> in processing.
    </div>}
  </div>
} 

export default observer(CartPage)