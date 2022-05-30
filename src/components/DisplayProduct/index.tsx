import { useCart } from "../../hooks/useCart";
import { ProductCard } from "../ProductCard";

interface Product {
  name: string;
  id: number;
  urlImage: string;
  price: string;
}

interface DisplayProductProps {
  productss: Array<Product>;
}
export function DisplayProduct({ productss }: DisplayProductProps) {
  const { products } = useCart();

  return (
    <div className="flex flex-wrap gap-2 max-w-[1440px] mx-auto mt-2">
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
