// src/api/products.js
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// axios instance (optional)
const api = axios.create({
    baseURL: API_URL,
    timeout: 5000, // optional
});

export async function fetchProducts() {
    const res = await api.get("/products");
    return res.data.data || [];
}

export async function addProduct(newProduct) {
    const res = await api.post("/products", newProduct);
    return res.data.data;
}

export async function updateProduct(productId, updates) {
    const res = await api.put(`/products/${productId}`, updates);
    return res.data.data;
}

export async function deleteProduct(productId) {
    const res = await api.delete(`/products/${productId}`);
    return res.data.data;
}