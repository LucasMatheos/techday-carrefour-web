import { Header } from "./components/Header";
import { SearchModal } from "./components/SearchModal";
import { ToastContainer } from "react-toastify";
import { DisplayProduct } from "./components/DisplayProduct";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./hooks/useCart";
import { BrowserRouter } from "react-router-dom";
import { RoutesAPP } from "./routes";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ToastContainer />

        <Header />
        <SearchModal />
        <RoutesAPP />
      </BrowserRouter>
    </CartProvider>
  );
}
