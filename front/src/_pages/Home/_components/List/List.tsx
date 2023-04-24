import ProductPreview from "@/common/ProductPreview/ProductPreview";
import {PRODUCT_PREVIEW_TYPES} from "@/common/ProductPreview/ProductPreview";
import styles from "./List.module.scss";

export type Props = {
  products: Array<Entity.Product>;
};

const List: React.FC<Props> = ({products}) => {

  const productsJSX = products.map((product: Entity.Product) => {
    return <ProductPreview key={product.id} type={PRODUCT_PREVIEW_TYPES.VERTICAL} product={product}/>
  });

  return <div className={styles.list}>
    {productsJSX}
    {/*<ProductPreview isEmpty type={PRODUCT_PREVIEW_TYPES.VERTICAL}/>
    <ProductPreview isEmpty type={PRODUCT_PREVIEW_TYPES.VERTICAL}/>*/}
  </div>
} 

export default List;
