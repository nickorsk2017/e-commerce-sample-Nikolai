"use client"
import {useState} from "react";
import {useStore} from "@/utils";
import Picture from "./_components/Picture/Picture";
import ButtonSize, {Props as ButtonProps} from "@/ui/ButtonSize/ButtonSize";
import Button from "@/ui/Button/Button";
import Collapse from "@/ui/Collapse/Collapse";
import styles from "./Detail.module.scss";

export type Props = {
  product: Entity.Product;
};

type Size = ButtonProps["size"];

const DetailPage: React.FC<Props> = ({product}) => {
  const {cartStore} = useStore();
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [error, setError] = useState("");

  const onSelectSize = (size: Size) => {
    setError("");
    setSelectedSize(size);
  }

  const sizesJSX = product.sizes.map((size: Size) => {
    return <ButtonSize
      onSelect={onSelectSize}
      selected={size === selectedSize}
      key={size}
      size={size}
    />
  });

  const addToOrder = () => {
    if(!selectedSize){
      setError("Please select your size");
    } else {
      cartStore.add({
        id: Math.round((1 - Math.random()) * 100000), 
        product,
        size: selectedSize
      });
    }
  }

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
      {sizesJSX}
      {error && <div className={styles.detail_error}>
        {error}
      </div>}
      <div className={styles.detail_buttons}>
        <Button className={styles.detail_add_to_cart} onClick={addToOrder}>Add to Order</Button>
      </div>
      <Collapse content={product.description} className={styles.detail_description}>
        Product Details
      </Collapse>
    </div>
    
  </div>
} 

export default DetailPage;
