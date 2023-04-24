import Link from "@/ui/Link/Link";
import _omit from "lodash/omit";
import {ArrowLeft, ArrowRight, Dots} from "@/assets"
import styles from "./Pagination.module.scss";

export type Props = {
  pagination: Entity.ProductPagination;
  exceptQueries?: Array<string>;
  pathname: string;
  numberPages: number;
};

const Pagination: React.FC<Props> = ({numberPages = 4, pagination, pathname}) => {
  const currentPage = pagination.page;
  const nextPages = pagination.pageCount - pagination.page;
  const prevPages = pagination.pageCount - nextPages - 1;
  const moreThanNumberPages = nextPages >= numberPages;

  const pagesLinksJSX = Array.from(Array(numberPages).keys()).map((pageNum) => {
    const page = (pageNum + 1) + (moreThanNumberPages ? prevPages : pagination.pageCount - numberPages);
    let href = `${pathname}?PAGE=${page}`;
    return <Link
        key={`page-${page}`}
        href={href}
        className={[
            styles.pagination_button,
            currentPage === page ? styles.pagination_button__active : ""
          ].join(" ")}
        >
        {page}
      </Link>
  }); 
  
  return <div className={styles.pagination}>
    {currentPage > 2 && <Link
      className={styles.pagination_button}
      href={`${pathname}`}
    >
      <ArrowLeft/><ArrowLeft/>
    </Link>}

    {currentPage > 1 && <Link
      className={styles.pagination_button}
      href={`${pathname}?PAGE=${currentPage - 1}`}
    >
      <ArrowLeft/>
    </Link>}

    {pagesLinksJSX}

    {moreThanNumberPages && 
    <>
      <span className={styles.pagination_button}>
        <Dots className={styles.pagination_dots} />
      </span>

      <Link
        href={`${pathname}?PAGE=${pagination.pageCount}`}
        className={styles.pagination_button}
      >
          {pagination.pageCount}
      </Link>
    </>}

    {currentPage < pagination.pageCount && <Link
      href={`${pathname}?PAGE=${currentPage + 1}`}
      className={styles.pagination_button}
    >
      <ArrowRight/>
    </Link>}

    {moreThanNumberPages && <Link
      href={`${pathname}?PAGE=${pagination.pageCount}`}
      className={styles.pagination_button}
    >
      <ArrowRight/><ArrowRight/>
    </Link>}
  </div>
} 

export default Pagination;