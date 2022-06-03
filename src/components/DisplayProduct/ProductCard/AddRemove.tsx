import { PlusCircle, MinusCircle } from "phosphor-react";

interface AddRemoveProductProps {
  id: number;
  cartAmount: number;
  addProduct: (productId: number) => void;
  removeProductAmount: (productId: number) => void;
}

export function AddRemoveProduct({
  addProduct,
  removeProductAmount,
  id,
  cartAmount,
}: AddRemoveProductProps) {
  return (
    <div
      className="flex 
    items-center
    justify-between
    rounded-md
    p-2
    sm:p-1 
    mt-2
    border-[1px]
    border-[#bbbbbb]
    shadow-[s#bbbbbb]
    shadow-md
    w-[calc(60vw)]
    m-auto
    sm:w-full
    
    
        "
    >
      <button className="" onClick={() => removeProductAmount(id)}>
        <MinusCircle color="red" size={30} />
      </button>

      <span className="  text-lg">{cartAmount}</span>

      <button className="" onClick={() => addProduct(id)}>
        <PlusCircle color={"green"} size={30} />
      </button>
    </div>
  );
}
