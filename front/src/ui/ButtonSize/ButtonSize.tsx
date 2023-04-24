import styles from "./ButtonSize.module.scss";

export type Props = {
  size: string;
};

const ButtonSize: React.FC<Props> = ({size}) => {
  return <button className={styles.button_size}>{size}</button>
} 

export default ButtonSize;