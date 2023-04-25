import { IProduct } from "@api/products";

type Props = {
  products?: IProduct[];
};

export const ProductsGrid = ({ products }: Props) => {
  if(!products) return null;
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};
