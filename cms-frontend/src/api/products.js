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

export async function addProduct(product) {
    const res = await api.post("/products", product);
    return res.data.data;
}
