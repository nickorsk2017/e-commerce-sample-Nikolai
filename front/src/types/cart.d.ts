declare namespace Entity {
    type CartItem = {
        id: Entity.ID;
        product: Entity.Product,
        size: Entity.ProductSizes,
    };

    type CartItems = Array<CartItem>
}