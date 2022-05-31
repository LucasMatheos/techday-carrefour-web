import { useCart } from "../../hooks/useCart";

export function CartIconAmount() {
  const { cart } = useCart();
  const cartSize = cart.length;

  return (
    <>
      {cartSize > 0 && (
        <div className="absolute flex justify-center items-center top-1 right-1 bg-white w-4 rounded-full text-[11px] font-black text-cfblue-500">
          {cartSize}
        </div>
      )}
    </>
  );
}
