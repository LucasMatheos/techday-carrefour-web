import Logo from "../../assets/logo.png";

export function Header() {
  return (
    <div className="max-w-[1440px] m-auto p-2 bg-slate-300" >
      <img src={Logo} alt="Carrefour" className="w-48"/>
    </div>
  );
}