"use client"
import {useEffect} from "react";
import {useSearchParams} from 'next/navigation'
import {usePathname, useRouter} from 'next/navigation';
import List from "./_components/List/List";
import {NUMBER_PAGES} from "@/variables";
import Pagination from "@/common/Pagination/Pagination";
import styles from "./Home.module.scss";

export type Props = {
  products: Array<Entity.Product>;
  pagination: Entity.ProductPagination;
};

const HomePage: React.FC<Props> = ({products, pagination}) => {
  const pathname = usePathname();
  const sarchParams = useSearchParams();
  let numberPages = NUMBER_PAGES;

  // smooth scroll when paginated
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [sarchParams]);

  if(pagination.pageCount < numberPages){
    numberPages = pagination.pageCount;
  }

  return <div className={styles.home}>
    <h1 className={styles.home_header}>New In</h1>
    <List page={pagination.page} products={products}/>
    {pathname && <Pagination
      numberPages={numberPages}
      pathname={pathname}
      pagination={pagination}
    />}
  </div>
} 

export default HomePage;
