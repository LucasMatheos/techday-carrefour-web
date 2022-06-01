import Logo from "../../assets/logo.png";
import { MagnifyingGlass } from "phosphor-react";
import { CartIcon } from "./CartIcon";
import { useCart } from "../../hooks/useCart";
import { useRef } from "react";
import { toast } from "react-toastify";
import { Loading } from "../SearchModal/Loading";
import { Link } from "react-router-dom";

export function Header() {
  let textInput = useRef<HTMLInputElement | null>(null);
  let cepNumber = "";

  const { modalIsOpen, isLoading, getProducts } = useCart();
  function handleSetCep() {
    if (textInput.current !== null) {
      if (textInput.current.value == "") {
        toast.error("Digite um CEP!");
      }
      cepNumber = textInput.current.value;
    }
  }

  function handleSeach() {
    handleSetCep();
    getProducts(cepNumber);
  }

  return (
    <div className="max-w-[1440px] mx-auto p-3 md:flex  md:justify-between border-b border-cfblue-900 ">
      <Link to="/">
        <img src={Logo} alt="Carrefour" className="w-56" />
      </Link>
      {!modalIsOpen && isLoading && <Loading />}
      <div className="flex align-center bg-cfblue-500 rounded-md ">
        <input
          ref={textInput}
          maxLength={8}
          type="search"
          placeholder="Digite um CEP: 00000-000"
          className="md:w-56 p-2 bg-white border-2 border-cfblue-500 md:rounded-lg rounded-sm"
        />
        <button className="p-3 rounded-r-lg " onClick={() => handleSeach()}>
          <MagnifyingGlass size={22} color="#fcfcfc" />
        </button>
        <Link to="/cart">
          <CartIcon />
        </Link>
      </div>
    </div>
  );
}
