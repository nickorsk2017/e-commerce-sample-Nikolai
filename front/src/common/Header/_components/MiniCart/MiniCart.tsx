import {Cart} from "@/assets";
import styles from "./MiniCart.module.scss";

export type Props = {};

const MiniCart: React.FC<Props> = () => {
  return <div className={styles.miniCart}>
    <Cart alt="site logo" title="lucy in sky" viewBox="0 0 26 26" className={styles.miniCart_icon}/>
  </div>
} 

export default MiniCart;
