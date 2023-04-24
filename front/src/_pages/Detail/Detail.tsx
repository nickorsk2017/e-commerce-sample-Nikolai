import Picture from "./_components/Picture/Picture";
import styles from "./Detail.module.scss";

export type Props = {
  product: Entity.Product;
};

const DetailPage: React.FC<Props> = ({product}) => {
  console.log(product, "product");

  return <div className={styles.detail}>
    <div className={styles.detail_left}>
      <Picture alt={product.name} src={product.image}/>
    </div>
    <div className={styles.detail_right}>
      <h1 className={styles.detail_name}>{product.name}</h1>
      <h2 className={styles.detail_designed}>Designed in Los Angeles</h2>
      <div className={styles.detail_price}>
        <span className={styles.detail_price_value}>{product.price}</span>
        <span className={styles.detail_special_price}>{product.special}</span>
      </div>
      <div className={styles.detail_label}>
        Size:
      </div>
    </div>
    
  </div>
} 

export default DetailPage;
