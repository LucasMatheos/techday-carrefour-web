import { Header } from "./components/Header";
import { SearchModal } from "./components/SearchModal";
import { ToastContainer } from "react-toastify";
import { DisplayProduct } from "./components/DisplayProduct";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./hooks/useCart";

export default function App() {
  return (
    <CartProvider>
      <Header />
      <SearchModal />
      <DisplayProduct />

      <ToastContainer />
    </CartProvider>
  );
}
