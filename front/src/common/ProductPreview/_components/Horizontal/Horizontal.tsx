import Picture from "@/common/Picture/Picture";
import Link from "@/ui/Link/Link";
import {Trash} from "@/assets";
import {PRODUCT_SIZES} from "@/variables";
import styles from "./Horizontal.module.scss";

export type Props = {
  product: Entity.Product;
  size?: keyof typeof PRODUCT_SIZES;
  onDelete?: () => void;
};

const Horizontal: React.FC<Props> = ({product, size, onDelete}) => {
  const onClick = () => {
    onDelete && onDelete();
  }

  return <div className={styles.horizontal}>
    <Link href={`/detail/${product!.model}.html`} className={styles.horizontal_left}>
      <Picture src={product.image} width={109} height={178} alt={product.name}/>
    </Link>
    <div className={styles.horizontal_right}>
      <div className={styles.horizontal_details}>
        <div>{product.name}</div>
        {size && <div className={styles.horizontal_size}><span>Size</span> {PRODUCT_SIZES[size]}</div>}
      </div>
      <div className={styles.horizontal_coast}>{product.special || product.price}</div>
      {onDelete && <Trash onClick={onClick} className={styles.horizontal_trash}/>}
    </div>
  </div>
} 

export default Horizontal;