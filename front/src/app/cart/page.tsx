import CartPage from "@/_pages/Cart/Cart";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cart page',
  description: 'Cart page',
};

export default function OrderBoard() {
  return <CartPage/>
}
