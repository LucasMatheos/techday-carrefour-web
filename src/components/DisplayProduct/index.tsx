import { useCart } from "../../hooks/useCart";
import { ProductCard } from "../ProductCard";

export function DisplayProduct() {
  const { products } = useCart();

  return (
    <div className="flex flex-wrap gap-2 max-w-[1440px] m-auto mt-2">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            name={product.name}
            id={product.id}
            urlImage={product.urlImage}
            price={product.price}
          />
        );
      })}
    </div>
  );
}
