import { API_BASE_URL } from "src/config";
import { generateRowId } from "src/utils";

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface IGetProductsListResponse {
  total: number;
  items: IProduct[];
}

export const getProductsList = async (): Promise<IGetProductsListResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (err) {
    throw new Error("Something went wrong.");
  }
};

export type TQueryArgs = Omit<IProduct, "id">;

export const createProduct = async (args: TQueryArgs) => {
  try {
    const randomId = generateRowId(
      Math.floor(Math.random() * 10) + 1
    ).toString();
    const data = new URLSearchParams();
    data.append("id", randomId);
    data.append("name", args.name);
    data.append("description", args.description);
    data.append("price", args.price);
    data.append("image", args.image);

    const response = await fetch(`${API_BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "x-www-form-url-encoded",
      },
      body: data,
    });
    return await response.json();
  } catch (err) {
    throw new Error("Something went wrong.");
  }
};

export const deleteProduct = async (id: string) => {
  try {
    await fetch(`${API_BASE_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return { message: "Product deleted successfully." };
  } catch (err) {
    throw new Error("Something went wrong.");
  }
};
