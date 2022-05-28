import { useState } from "react";
import { Header } from "./components/Header";
import { SearchModal } from "./components/SearchModal";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { apiCep, apiSellerName } from "./services/api";
import { ProductAPI } from "./util/types";
import { DisplayProduct } from "./components/DisplayProduct";

interface Product {
  name: string;
  id: number;
  urlImage: string;
  price: number;
}

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [cep, setCep] = useState("0");
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  function handleIsLoading() {
    setIsLoading(true);
  }
  function handleSearchingDone() {
    setIsLoading(false);
    setModalIsOpen(false);
  }

  async function getProducts(cepNumber: string) {
    try {
      handleIsLoading();
      const nearbySellers = await apiCep
        .get(`regions?country=BRA&postalCode=${cepNumber}`)
        .then((response) => response.data);

      const firstSellerId = nearbySellers[0]["sellers"][0].id;

      const allProducts = await apiSellerName
        .get<ProductAPI[]>(`/search?fq=${firstSellerId}`)
        .then((response) => response.data);

      const products = allProducts.map((product) => {
        console.log(allProducts);
        return {
          name: product.productName,
          id: product.productId,
          urlImage: product.items[0].images[0].imageUrl,
          price: product.items[0].sellers[0].commertialOffer.Price,
        };
      });
      setProducts(products);

      handleSearchingDone();
    } catch (err) {
      toast.error("Algo deu errado, tente novamente!");
      setIsLoading(false);
    }
  }

  return (
    <>
      <Header />
      <SearchModal
        isOpen={modalIsOpen}
        setCep={setCep}
        isLoading={isLoading}
        getProducts={getProducts}
      />
      <DisplayProduct products={products}/>

      <ToastContainer />
    </>
  );
}
