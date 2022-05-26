import { AddRemoveProduct } from "./AddRemove";

export function ProductCard() {
  return (
    <div
      className="border-2
      rounded-md
      w-[13rem]
      px-2
      pb-4
      flex
      flex-col
      hover:shadow-lg 
      shadow-[#D9D9D9]
            
      "
    >
      <img
        className="
        w-[175px]
        m-auto          
        "
        src="https://carrefourbr.vteximg.com.br/arquivos/ids/14648703/alho-granel-kg-1.jpg"
        alt="Alho a granel Aprox. 200g"
      />

      <h1
        className="
      w-auto 
      p-2"
      >
        Alho a granel Aprox. 200g
      </h1>

      <p className=" text-xl text-cfblue-500 font-bold mt-6 p-1 ">
        R$ <span>11,12</span>
      </p>

      <button
        className="
        bg-cfblue-500 
      text-white
        p-2 
        mt-2
        rounded-md
        shadow-md
      shadow-cfblue-500
      "
      >
        ADICIONAR
      </button>
      
      <AddRemoveProduct />
    </div>
  );
}
