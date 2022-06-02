import { MinusCircle, PlusCircle, TrashSimple } from "phosphor-react";
import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../util/format";

export function DisplayCart() {
  const { cart, addProduct, removeProductAmount, removeProduct } = useCart();

  const TotalAmount = cart.reduce((amount, product) => {
    const subTotalAmount = product.price * product.amount;
    amount += subTotalAmount;
    return amount;
  }, 0);

  return (
    <div className="p-2 rounded-md max-w-[1440px] m-auto">
      <section>
        <table className="w-full">
          <thead>
            <tr className="text-left p-3 ">
              <th aria-label="product image" />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th aria-label="delete icon" />
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => {
              return (
                <tr
                  key={product.id}
                  className="p-3 border-b-[1px] border-[#999]"
                >
                  <td className=" flex justify-center items-center p-1">
                    <img
                      className="h-[100px] rounded-md"
                      src={product.urlImage}
                      alt={product.name}
                    />
                  </td>
                  <td>
                    <strong className="block text-[#646464]">
                      {product.name}
                    </strong>
                    <span className="mt-[5px] text-lg font-bold ">
                      {formatPrice(product.price)}
                    </span>
                  </td>
                  <td>
                    <div className="flex items-center">
                      <button
                        type="button"
                        disabled={product.amount <= 1}
                        onClick={() => removeProductAmount(product.id)}
                        className="disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <MinusCircle size={28} color="#e81e26" />
                      </button>
                      <input
                        type="text"
                        readOnly
                        value={product.amount}
                        className="border-[1px] rounded-md text-[#646464] p-[6px] w-12"
                      />
                      <button
                        type="button"
                        onClick={() => addProduct(product.id)}
                      >
                        <PlusCircle size={28} color="green" />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>
                      {formatPrice(product.amount * product.price)}
                    </strong>
                  </td>
                  <td>
                    <button
                      onClick={() => removeProduct(product.id)}
                      className="opacity-50 hover:opacity-100 transition-opacity duration-300"
                    >
                      <TrashSimple size={28} color="gray" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <footer className="mt-[30px] flex justify-between items-center">
        <button className="bg-cfblue-500 text-[#fff] border-0 rounded-md py-3 px-5 font-bold uppercase hover:bg-cfblue-900 transition duration-300">
          Finalizar pedido
        </button>

        <div className="items-baseline">
          <span className="font-bold">TOTAL </span>
          <strong className="text-2xl">{formatPrice(TotalAmount)}</strong>
        </div>
      </footer>
    </div>
  );
}
