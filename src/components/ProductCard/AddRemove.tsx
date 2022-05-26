export function AddRemoveProduct() {
  return (
    <div
      className="flex 
    content-center
    justify-between
    rounded-md
    p-2 
    mt-2
    border-[1px]
    border-[#d9d9d9]
    shadow-[#d9d9d9]
    shadow-md
    "
    >
      <button className=" ml-2  bg-red-700  rounded-full  w-7  text-white  text-xl  font-black  subpixel-antialiased">
        -
      </button>

      <span className="font-semibold  text-md">12</span>

      <button className="mr-2  bg-green-700  rounded-full  w-7 text-white  text-xl  font-black  subpixel-antialiased">
        +
      </button>
    </div>
  );
}
