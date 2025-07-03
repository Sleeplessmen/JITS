import api from "../api/axiosClient";

const ProductRepository = {
    async fetchAll() {
        const res = await api.get("/products");
        return res.data.data || [];
    },

    async create(newProduct) {
        const res = await api.post("/products", newProduct);
        return res.data.data;
    },

    async update(productId, updates) {
        const res = await api.put(`/products/${productId}`, updates);
        return res.data.data;
    },

    async delete(productId) {
        const res = await api.delete(`/products/${productId}`);
        return res.data.data;
    }
};

export default ProductRepository;
// This repository handles all product-related API calls.
// It abstracts the API layer, allowing components to interact with products without worrying about the underlying HTTP requests.
// This makes it easier to manage and test the product-related logic in the application.