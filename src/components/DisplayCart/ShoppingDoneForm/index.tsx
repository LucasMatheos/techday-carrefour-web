import { Popover } from "@headlessui/react";
import { useState } from "react";
import { useCart } from "../../../hooks/useCart";
import { Loading } from "../../SearchModal/Loading";

export function ShoppingDoneForm() {
  const { cart, setCart, setPostalCode } = useCart();

  function handleShopping() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCart([]);
      setPostalCode("");
    }, 3000);
  }

  const [isLoading, setIsLoading] = useState(false);
  return (
    <Popover>
      <Popover.Panel>
        {isLoading ? null : (
          <div className="bg-zinc-900 absolute py-6 px-2 rounded-xl flex flex-col gap-2 items-center shadow-lg w-[calc(100vw-1rem)] sm:w-[350px]">
            <p className="text-white text-xl">
              Compra feita com sucesso <span className="text-2xl">✅</span>
            </p>
            <p className="text-cfblue-500 text-4xl text-center">Carrefour</p>
            <p className="text-white text-center text-xl">Agradece!</p>
          </div>
        )}
      </Popover.Panel>
      <Popover.Button>
        <button
          onClick={() => handleShopping()}
          disabled={cart.length === 0}
          className="bg-cfblue-500 flex justify-center w-[190px] text-[#fff] border-0 rounded-md py-3 px-3 font-bold uppercase hover:bg-cfblue-900 transition duration-300 disabled:cursor-not-allowed"
        >
          {isLoading ? <Loading /> : "Finalizar compra"}
        </button>
      </Popover.Button>
    </Popover>
  );
}
