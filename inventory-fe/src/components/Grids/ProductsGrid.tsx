import { queryClient } from "@api/index";
import { IProduct, deleteProduct } from "@api/products";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

type Props = {
  products?: IProduct[];
};

export const ProductsGrid = ({ products }: Props) => {
  const [deletingProduct, setDeletingProduct] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      setDeletingProduct(null);
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const { isLoading } = mutation;

  const handleDeleteClick = async (id: string) => {
    setDeletingProduct(id);
    mutation.mutate(id)
  }

  if(!products) return null;
  if(products.length === 0) return (
    <div className="py-2">
      <h2 className="text-lg font-semibold">No products found!</h2>
      <p className="text-regular text-gray-500">Please add some products to get started.</p>
    </div>
  );
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <div key={product.id} className="group relative">
          <div className="relative min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
            {deletingProduct === product.id && (
              <>
                <div className="absolute top-0 left-0 right-0 bottom-0 inset-0 bg-black opacity-50"></div>
                <div className="absolute top-0 left-0 right-0 bottom-0 inset-0 flex items-center justify-center">
                  <h2 className="animate-pulse text-lg text-white">Deleting...</h2>
                </div>
              </>
            )}
            <button disabled={isLoading} onClick={() => handleDeleteClick(product.id)} className="absolute rounded right-1 bottom-1 p-2 bg-red-600 hover:opacity-75">
              <img src="/trash-2.svg" width={18} height={18}/>
            </button>
            <img src={product.image} alt={product.name} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.description}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">Rs.{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
