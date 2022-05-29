import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { apiCep, apiSellerName } from "../services/api";
import { formatPrice } from "../util/format";
import { ProductAPI } from "../util/types";

interface Product {
  name: string;
  id: number;
  urlImage: string;
  price: string;
}
interface CartProviderProps {
  children: ReactNode;
}
interface CartContextData {
  modalIsOpen: boolean;
   isLoading: boolean
   products: Array<Product>
  getProducts: (cepNumber: string) => void
}


const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [modalIsOpen, setModalIsOpen] = useState(true);
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
        return {
          name: product.productName,
          id: product.productId,
          urlImage: product.items[0].images[0].imageUrl,
          price: formatPrice(product.items[0].sellers[0].commertialOffer.Price),
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
    <CartContext.Provider
      value={{ modalIsOpen, isLoading, products, getProducts }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}