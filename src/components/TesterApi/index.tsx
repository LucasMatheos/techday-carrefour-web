import { useEffect, useState } from "react";
import { apiCep, apiSellerName } from "../../services/api";
import { ProductCard } from "../ProductCard";

export function TesterApi() {
  const [cep, setCep] = useState([]);
  const [product, setProdutc] = useState([]);

  const getProducts = async () => {
    const cep = await apiCep
      .get("regions?country=BRA&postalCode=52050320")
      .then((response) => response.data);

    const cepIds = cep[0]["sellers"][0].id;

    const products = await apiSellerName
      .get(`/search?fq=${cepIds}`)
      .then((response) => response.data);

    setProdutc(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex flex-wrap gap-2 max-w-[1440px] mx-auto mt-2">
      {product.map((products) => {
        return <ProductCard />;
      })}
    </div>
  );
}
