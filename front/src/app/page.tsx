import productAPI from "@/api/product";
import HomePage from "@/_pages/Home/Home";
import { Metadata } from 'next';
import {PageProps} from ".next/types/app/page";

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Home page',
};

export default async function Home(pageProps: PageProps) {
  const {searchParams} = pageProps;
  const { data: products, ...pagination} = await productAPI.product.getList({page: searchParams["PAGE"] || 1});
  return <HomePage pagination={pagination} products={products}/>
}
