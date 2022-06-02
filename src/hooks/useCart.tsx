import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { ProductAPI } from "../util/types";

interface Product {
  name: string;
  id: number;
  urlImage: string;
  price: number;
}

interface CartProduct extends Product {
  amount: number;
}

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: CartProduct[];
  modalIsOpen: boolean;
  isLoading: boolean;
  products: Array<Product>;
  getProducts: (cepNumber: string) => void;
  addProduct: (productId: number) => void;
  removeProductAmount: (productId: number) => void;
  removeProduct: (productId: number) => void;
}

const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartProduct[]>([]);

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
      const nearbySellers = await api
        .get(`postalcode?postalCode=${cepNumber}`)
        .then((response) => response.data);

      const firstSellerId = nearbySellers[0]["sellers"][0].id;

      const allProducts = await api
        .get<ProductAPI[]>(`products?sellerName=${firstSellerId}`)
        .then((response) => response.data);

      const productsAPI = allProducts.map((product) => {
        return {
          name: product.productName,
          id: product.productId,
          urlImage: product.items[0].images[0].imageUrl,
          price: product.items[0].sellers[0].commertialOffer.Price,
        };
      });

      setProducts(productsAPI);
      handleSearchingDone();
    } catch (err) {
      toast.error("Algo deu errado, tente novamente!");
      setIsLoading(false);
    }
  }

  const addProduct = (productId: number) => {
    try {
      const findProduct = products.find((product) => product.id === productId);
      if (findProduct) {
        const updatedCart = [...cart];
        const productExists = updatedCart.find(
          (product) => product.id === productId
        );

        if (productExists) {
          productExists.amount += 1;
        } else {
          const updatedProduct = { ...findProduct, amount: 1 };
          updatedCart.push(updatedProduct);
        }
        setCart(updatedCart);
      } else {
        toast.error("Produto não existe!");
      }
    } catch (err) {
      toast.error("Algo deu errado!");
    }
  };

  const removeProductAmount = (productId: number) => {
    try {
      const updatedCart = [...cart];
      const productExists = updatedCart.find(
        (product) => product.id === productId
      );

      if (productExists) {
        if (productExists.amount > 1) {
          productExists.amount -= 1;
          setCart(updatedCart);
        } else {
          const removeProduct = updatedCart.filter(
            (product) => product.id !== productId
          );
          setCart(removeProduct);
        }
      }
    } catch (err) {
      toast.error("Algo deu errado!");
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const updatedCart = [...cart];
      const productExists = updatedCart.find(
        (product) => product.id === productId
      );

      if (productExists) {
        const remainingProducts = updatedCart.filter(
          (product) => product.id !== productId
        );
        setCart(remainingProducts);
      }
    } catch (err) {
      toast.error("Algo deu errado!");
    }
  };
  return (
    <CartContext.Provider
      value={{
        modalIsOpen,
        isLoading,
        products,
        getProducts,
        addProduct,
        removeProductAmount,
        removeProduct,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
