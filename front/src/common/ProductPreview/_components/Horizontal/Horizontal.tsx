import styles from "./Horizontal.module.scss";

export type Props = {
  isEmpty?: boolean; 
  product?: Entity.Product;
};

const Horizontal: React.FC<Props> = () => {
  return <div className={styles.horizontal}>
      test
  </div>
} 

export default Horizontal;