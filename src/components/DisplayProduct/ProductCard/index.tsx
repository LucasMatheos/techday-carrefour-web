import { toast } from "react-toastify";
import { useCart } from "../../../hooks/useCart";
import { formatPrice } from "../../../util/format";
import { AddRemoveProduct } from "./AddRemove";

interface ProductCardProps {
  name: string;
  id: number;
  urlImage: string;
  price: number;
}
interface CartItemsAmount {
  [key: number]: number;
}

export function ProductCard({ id, name, urlImage, price }: ProductCardProps) {
  const { cart, addProduct, removeProductAmount } = useCart();

  function handleTruncatedProduct(name: string) {
    let productName = name.slice(0, 25);
    if (name.length > 25) {
      productName = productName + "...";
    }
    toast.success(`${productName} adicionado ao carrinho!`);
  }

  function handleFirstProduct(productid: number, productname: string) {
    handleTruncatedProduct(productname);
    addProduct(productid);
  }
  const cartItensAmount = cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount;

    return sumAmount;
  }, {} as CartItemsAmount);

  return (
    <li
      className="
      rounded-md
      w-full
      sm:w-[13rem]
      mb-10
      md:mb-4
      px-2
      pb-4
      flex
      flex-col
      hover:shadow-2xl
      shadow-gray-100
      hover:bg-gray-100
      "
    >
      <img
        className="
        max-w-[175px]
        max-h-[175px]
        m-auto          
        "
        src={urlImage}
        alt={name}
      />

      <p
        className="
        h-15
        md:h-20 
        overflow-ellipsis 
        overflow-hidden
        w-auto 
        p-2
        "
      >
        {name}
      </p>

      <p className=" text-xl  text-cfblue-500 font-bold md:mt-6 p-2 ">
        <span>{formatPrice(price)}</span>
      </p>
      {cartItensAmount[id] > 0 ? (
        <AddRemoveProduct
          addProduct={addProduct}
          removeProductAmount={removeProductAmount}
          id={id}
          cartAmount={cartItensAmount[id]}
        />
      ) : (
        <button
          className="
          w-[calc(60vw)]
          m-auto
          sm:w-full
        bg-cfblue-500 
        text-white
          p-3
          sm:p-2
          mt-2
          rounded-md
          shadow-md
        shadow-cfblue-500
          transition-all duration-300 ease-linear
          hover:bg-cfblue-900
      "
          onClick={() => handleFirstProduct(id, name)}
        >
          ADICIONAR
        </button>
      )}
    </li>
  );
}
