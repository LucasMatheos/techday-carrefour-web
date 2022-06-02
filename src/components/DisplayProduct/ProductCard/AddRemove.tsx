interface AddRemoveProductProps {
  id: number;
  cartAmount: number;
  addProduct: (productId: number) => void;
  removeProductAmount: (productId: number) => void;
}

export function AddRemoveProduct({
  addProduct,
  removeProductAmount,
  id,cartAmount
}: AddRemoveProductProps) {
  return (
    <div
      className="flex 
    content-center
    justify-between
    rounded-md
    p-1 
    mt-2
    border-[1px]
    border-[#d9d9d9]
    shadow-[#d9d9d9]
    shadow-md
    "
    >
      <button
        className=" ml-2  bg-red-700  rounded-full  w-7  text-white  text-xl  font-black  subpixel-antialiased"
        onClick={() => removeProductAmount(id)}
      >
        -
      </button>

      <span className="font-semibold  text-md">{cartAmount}</span>

      <button
        className="mr-2  bg-green-700  rounded-full  w-7 text-white  text-xl  font-black  subpixel-antialiased"
        onClick={() => addProduct(id)}
      >
        +
      </button>
    </div>
  );
}
