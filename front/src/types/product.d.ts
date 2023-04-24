declare namespace Entity {
    type ProductSizes = "Small" | "Medium" | "Large";

    type Product = {
        id: Entity.ID;
        model: string;
        name: string;
        image: string;
        price: string;
        special: string;
        priceInCents: number;
        specialInCents: number;
        description: string;
        sizes: Array<ProductSizes>;
    };

    type ProductPagination = {
      count: number,
      total: number,
      pageCount: number,
      page: number,
    };
}