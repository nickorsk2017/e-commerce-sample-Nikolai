import {Logo as LogoIcon} from "@/assets";
import styles from "./Logo.module.scss";

export type Props = {};

const Logo: React.FC<Props> = () => {
  return <LogoIcon viewBox="0 0 142.92 29" className={styles.logo}/>
} 

export default Logo;