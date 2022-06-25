import { Routes, Route } from "react-router-dom";
import { DisplayCart } from "./components/DisplayCart";
import { DisplayProduct } from "./components/DisplayProduct";
import { InputMask } from "./components/InputMask";

export function RoutesAPP() {
  return (
    <Routes>
      <Route path="/" element={<DisplayProduct />} />
      <Route path="/cart"  element={<DisplayCart />} />
          </Routes>
  );
}
