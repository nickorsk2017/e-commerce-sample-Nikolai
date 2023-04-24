"use client"
import {Logo, MiniCart} from "./_components";
import styles from "./Header.module.scss";

export type Props = {};

const Header: React.FC<Props> = (
  () => {
    
    return <div className={styles.header}>
      <div className={styles.header_left}>
        <Logo/>
      </div>
      <div className={styles.header_right}>
        <MiniCart/>
      </div>
    </div>;
  }
);

export default Header;
