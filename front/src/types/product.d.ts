declare namespace Entity {
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
        sizes: string[];
    };

    type ProductPagination = {
      count: number,
      total: number,
      pageCount: number,
      page: number,
    };
}