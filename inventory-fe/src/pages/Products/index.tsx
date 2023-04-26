import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getProductsList } from "@api/products";
import { HeroSection } from "@components/HeroSection";
import { ProductsGrid } from "@components/Grids/ProductsGrid";
import { AddProductModal } from "@components/Modals";
import { Button } from "@components/Button";
import { ProductsGridSkeleton } from "@components/Grids/ProductsGridSkeleton";

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isLoading, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsList,
  });

  return (
    <>
      <div className="bg-gradient-to-r from-sky-100 to-indigo-300">
        <HeroSection />
      </div>
      <div className="container mx-auto p-4">
        <div id="products">
          <AddProductModal
            isModalOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
          <div className="flex justify-between items-center">
            <div className="text-2xl font-semibold">Products List</div>
            <Button fillType="dark" onClick={() => setIsModalOpen(true)}>
              Add Product +
            </Button>
          </div>
          {error ? (
            <div>
              Something went wrong... Please try again later!
            </div>
          ) : 
          isLoading ? (
            <ProductsGridSkeleton gridItemsCount={8}/>
          ) : (
            <ProductsGrid products={data?.items} />
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
