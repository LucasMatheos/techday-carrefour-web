import { ShoppingCart } from "phosphor-react";
import { CartIconAmount } from "./CartItemAmount";

export function CartIcon() {
  return (
    <div className="relative flex justify-center items-center p-3 ">
      <CartIconAmount />
      <ShoppingCart size={23} color="#fcfcfc" />
    </div>
  );
}
