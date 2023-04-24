import {Cart} from "@/assets";
import styles from "./MiniCart.module.scss";

export type Props = {
  count: number;
};

const MiniCart: React.FC<Props> = ({count}) => {
  return <div className={styles.miniCart}>
    {count > 0 && <div className={styles.miniCart_badge}>{count}</div>}
    <Cart alt="site logo" title="lucy in sky" viewBox="0 0 26 26" className={styles.miniCart_icon}/>
  </div>
} 

export default MiniCart;
