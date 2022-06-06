import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { CartIconAmount } from "./CartItemAmount";

interface CarticonProps {
  isNotAllowed: boolean;
}

export function CartIcon({ isNotAllowed }: CarticonProps) {
  return (
    <div className="relative flex justify-center items-center p-3">
      <Link to="/cart" className={`${isNotAllowed && "pointer-events-none"}`}>
        <CartIconAmount />
        <ShoppingCart size={23} color="#fcfcfc" />
      </Link>
    </div>
  );
}
