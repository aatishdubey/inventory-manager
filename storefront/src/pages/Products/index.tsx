import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getProductsList } from "@api/products";
import { HeroSection } from "@components/HeroSection";
import { ProductsGrid } from "@components/ProductsGrid";
import { AddProductModal } from "@components/Modals";
import { Button } from "@components/Button";

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isLoading, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsList,
  });

  if (error)
    return (
      <div className="container mx-auto p-4">
        Something went wrong... Please try again later!
      </div>
    );

  return (
    <div className="container mx-auto p-4">
      <HeroSection />
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
        {isLoading ? (
          <div className="container mx-auto p-4">Loading...</div>
        ) : (
          <ProductsGrid products={data?.items} />
        )}
      </div>
    </div>
  );
};

export default Products;
