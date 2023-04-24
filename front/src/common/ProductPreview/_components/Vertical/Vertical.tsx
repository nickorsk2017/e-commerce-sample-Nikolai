"use client"
import Picture from "./_components/Picture/Picture";
import Link from "@/ui/Link/Link";
import styles from "./Vertical.module.scss";

export type Props = {
  isEmpty?: boolean; 
  product?: Entity.Product;
};

const Vertical: React.FC<Props> = ({isEmpty, product}) => {
  if(isEmpty){
    return <div className={styles.vertical}></div>
  }

  return <Link href={`/detail/${product!.model}.html`} className={styles.vertical}>
    <Picture alt={product!.name} src={product!.image}/>
    <div className={styles.vertical_title}>
      {product!.name}
    </div>
    <div className={styles.vertical_size}>
      {product!.sizes.join(", ")}
    </div>
    <div className={styles.vertical_price}>
      <i className={[product!.specialInCents ? styles.vertical_price_discont : "", styles.vertical_price_value].join(" ")}>
        {product!.price}
      </i>
      {product!.specialInCents && <span className={styles.vertical_price_value}>{product!.special}</span>}
    </div>
  </Link>
} 

export default Vertical;