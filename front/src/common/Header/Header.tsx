"use client"
import {observer} from "mobx-react";
import {useStore} from '@/utils';
import Link from "@/ui/Link/Link";
import {Logo, MiniCart} from "./_components";
import styles from "./Header.module.scss";

export type Props = {};

const Header: React.FC<Props> = () => {
    const {cartStore} = useStore();
    return <div className={styles.header}>
      <Link href="/" className={styles.header_left}>
        <Logo/>
      </Link>
      <Link href="/cart" className={styles.header_right}>
        <MiniCart count={cartStore.count}/>
      </Link>
    </div>;
};

export default observer(Header);
