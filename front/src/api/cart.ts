const api = {
    cart: {
        checkout: async (cartItems: Entity.CartItems) => {
            let url = `http://localhost:3000/checkout/placeOrder`;
            const products = cartItems.map((item) => {
                return {
                    id: item.id,
                    size: item.size
                }
            });
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({products})
            });
            const data = await response.json();
            return data;
        }
    }
}

export default api;