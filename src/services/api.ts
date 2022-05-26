import axios from "axios";

export const apiCep = axios.create({
  baseURL: "https://mercado.carrefour.com.br/api/checkout/pub",
});

export const apiSellerName = axios.create({
  baseURL: "https://mercado.carrefour.com.br/api/catalog_system/pub/products",
});

// regions?country=BRA&postalCode=
// /search?fq=

//https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq=carrefourbr1056
