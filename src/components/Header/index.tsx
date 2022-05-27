import Logo from "../../assets/logo.png";
import { MagnifyingGlass } from "phosphor-react";

export function Header() {
  return (
    <div className="max-w-[1440px] mx-auto p-3 flex justify-between border-b border-cfblue-900 ">
      <img src={Logo} alt="Carrefour" className="w-56" />
      <div className="flex align-center bg-cfblue-500 rounded-md ">
        <input
          type="search"
          placeholder="Digite um CEP: 00000-000"
          className="w-56 p-2 bg-white border-2 border-cfblue-500 rounded-lg"
        />
        <button className="p-3 rounded-r-lg ">
          <MagnifyingGlass size={20} color="#fcfcfc" />
        </button>
      </div>
    </div>
  );
}
