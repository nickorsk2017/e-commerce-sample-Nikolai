import {useStore} from '@/utils';
import {observer} from "mobx-react";
import ProductPreview, {PRODUCT_PREVIEW_TYPES} from "@/common/ProductPreview/ProductPreview";
import styles from "./List.module.scss";

export type Props = {};

const CartItemsList: React.FC<Props> = () => {
  const {cartStore} = useStore();

  const listJSX = cartStore.cartItems.map((item: Entity.CartItem) => {
    const onDelete = () => {
      cartStore.delete(item);
    }

    return <ProductPreview
      key={item.id}
      onDelete={onDelete}
      product={item.product}
      type={PRODUCT_PREVIEW_TYPES.HORIZONTAL}
      size={item.size}
    />
  });

  return <div className={styles.items_list}>
    {listJSX}
  </div>
} 

export default observer(CartItemsList);