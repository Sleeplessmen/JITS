import api from "./axios";

export const login = (credentials) =>
    api.post("/auth/login", credentials).then(res => res.data);

export const register = (info) =>
    api.post("/auth/register", info).then(res => res.data);

export const getMe = () =>
    api.get("/auth/me").then(res => res.data);
