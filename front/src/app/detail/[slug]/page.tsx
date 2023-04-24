import productAPI from "@/api/product";
import {PageProps} from ".next/types/app/page";
import DetailPage from "@/_pages/Detail/Detail";

export default async function Details({params}: PageProps) {
  const id: string = params.slug?.replace(/[^0-9]/g,"");
  const product = await productAPI.product.get({productId: id});
  
  return <DetailPage product={product}/>
}
