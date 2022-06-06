import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";

export function ShoppingDoneMessage() {
  const navigate = useNavigate();
  const { setCart } = useCart();

  useEffect(() => {
    setTimeout(() => {
      setCart([]);
      navigate("/");
    }, 3000);
  }, []);
  return (
    <div className="bg-white font-semibold absolute py-6 px-2 rounded-xl flex flex-col gap-2 items-center shadow-lg w-[calc(100vw-1rem)] sm:w-[350px]">
      <p className=" text-xl">
        Compra feita com sucesso <span className="text-2xl">✅</span>
      </p>
      <p className="text-cfblue-500 text-4xl text-center">Carrefour</p>
      <p className=" text-center text-xl">Agradece!</p>
    </div>
  );
}
