export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface IGetProductsListResponse {
  total: number;
  items: IProduct[]
}

export const getProductsList = async (): Promise<IGetProductsListResponse> => {
  const response = await fetch(
    "https://5qsesfpy4wbhlq6fmdi67mgqlm0umsal.lambda-url.ap-south-1.on.aws/",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return await response.json();
};


export type TQueryBody = Omit<IProduct, "id">;

export const createProduct = async (body: TQueryBody) => {
  const response = await fetch(
    "https://5qsesfpy4wbhlq6fmdi67mgqlm0umsal.lambda-url.ap-south-1.on.aws/",
    {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return await response.json();
};

// export const deleteProduct = async (id: string) => {
//   const deletedProduct = await Product.findByIdAndDelete(id).exec();
//   return deletedProduct;
// };
