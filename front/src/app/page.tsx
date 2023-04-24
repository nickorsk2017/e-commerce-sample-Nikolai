import productAPI from "@/api/product";
import HomePage from "@/_pages/Home/Home";
import {PageProps} from ".next/types/app/page";

export default async function Home(pageProps: PageProps) {
  const {searchParams} = pageProps;
  const { data: products, ...pagination} = await productAPI.product.getList({page: searchParams["PAGE"] || 1});
  return <HomePage pagination={pagination} products={products}/>
}
