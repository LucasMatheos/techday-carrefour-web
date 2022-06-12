import Logo from "../../assets/logo.png";
import { MagnifyingGlass } from "phosphor-react";
import { CartIcon } from "./CartIcon";
import { useCart } from "../../hooks/useCart";
import { KeyboardEvent, useRef } from "react";
import { toast } from "react-toastify";
import { Loading } from "../SearchModal/Loading";
import { Link } from "react-router-dom";

export function Header() {
  let textInput = useRef<HTMLInputElement | null>(null);
  let cepNumber = "";

  const { modalIsOpen, isLoading, getProducts, postalCode, cart } = useCart();

  function handleSetCep() {
    if (textInput.current !== null) {
      if (textInput.current.value == "") {
        toast.error("Digite um CEP!");
      }
      cepNumber = textInput.current.value;
    }
  }

  function handleEnterPress(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  function handleSearch() {
    handleSetCep();
    cepNumber ? getProducts(cepNumber) : null;
  }

  return (
    <div className="flex flex-col max-w-[1440px] items-center  mx-auto p-3 border-b border-cfblue-900  sm:flex sm:flex-row sm:justify-between ">
      <Link to="/">
        <img
          src={Logo}
          alt="Carrefour"
          className="w-[calc(100vw-1rem)] sm:w-60"
        />
      </Link>
      {!modalIsOpen && isLoading ? (
        <Loading />
      ) : (
        <div className="flex p-[0.75px] mt-2 align-center bg-cfblue-500 rounded-md max-w-[350px] sm:mt-0">
          <input
            ref={textInput}
            type="text"
            placeholder="Busque outro CEP:"
            maxLength={8}
            className=" p-2 bg-slate-200 border-2 border-cfblue-500 rounded-lg md:w-56"
            onKeyDown={(e) => handleEnterPress(e)}
          />
          <button className="p-3 rounded-r-lg " onClick={() => handleSearch()}>
            <MagnifyingGlass size={22} color="#fcfcfc" />
          </button>
          <CartIcon isNotAllowed={cart.length < 1} />
        </div>
      )}
    </div>
  );
}
