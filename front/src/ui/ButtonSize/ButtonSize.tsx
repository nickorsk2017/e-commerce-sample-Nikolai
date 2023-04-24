import {PRODUCT_SIZES} from "@/variables";
import styles from "./ButtonSize.module.scss";

export type Props = {
  size: keyof typeof PRODUCT_SIZES;
  selected?: boolean;
  onSelect: (size: keyof typeof PRODUCT_SIZES) => void;
};

const ButtonSize: React.FC<Props> = ({size, selected, onSelect}) => {
  const onClick = () => {
    onSelect(size);
  }
  
  return <button
    onClick={onClick}
    className={[styles.button_size, selected ? styles.button_size__selected : ""].join(" ")}
  >
    {PRODUCT_SIZES[size]}
  </button>
} 

export default ButtonSize;