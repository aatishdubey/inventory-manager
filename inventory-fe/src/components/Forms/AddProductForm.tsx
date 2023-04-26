import { Button } from "@components/Button";
import { Textarea } from "@components/Inputs";
import { TextInput } from "@components/Inputs/TextInput";
import { useMutation } from "@tanstack/react-query";
import { TQueryArgs, createProduct } from "@api/products";
import { queryClient } from "@api/index";

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  onClose: () => void;
}

export const AddProductForm = ({ onClose, ...props }: Props) => {
  const mutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      onClose();
    },
  });

  const { isLoading } = mutation;

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget;
    const values: { [key: string]: string | number } = {};
    const inputs: NodeListOf<HTMLInputElement | HTMLTextAreaElement> = form.querySelectorAll("input,textarea");
    inputs.forEach((input) => {
      values[input.name] = input.value;
    });

    mutation.mutate(values as TQueryArgs);
  };

  return (
    <form
      {...props}
      onSubmit={handleFormSubmit}
      className="flex flex-col space-y-3 pt-2 border-t border-gray-200"
    >
      <TextInput
        label="Product Name"
        id="name"
        name="name"
        placeholder="E.g. Stone-washed Denim Jeans"
        pattern="^.{3,}$"
        required
      />
      <Textarea
        rows={3}
        name="description"
        label="Product Description"
        id="description"
        placeholder="E.g. A pair of jeans that is made from 100% cotton."
        required
      />
      <TextInput
        label="Product Price"
        id="price"
        name="price"
        prefixText="Rs."
        placeholder="0.00"
        pattern="[0-9]+(\.[0-9][0-9]?)?"
        required
      />
      <TextInput
        label="Image URL"
        id="image"
        name="image"
        placeholder="E.g. https://test.com/test.jpg"
        pattern="^(https?://)?[\w.-]+\.[a-zA-Z]{2,}/.+(\.jpg|\.png)$"
        required
      />

      <div className="mt-3">
        <p className="text-sm text-gray-500">
          Click submit if you're sure you want to add this product.
        </p>
      </div>

      <div className="flex space-x-2 my-3">
        <Button
          fillType="dark"
          type="submit"
          loading={isLoading}
          disabled={isLoading}
        >
          Submit
        </Button>
        <Button onClick={onClose} disabled={isLoading}>
          Cancel
        </Button>
      </div>
    </form>
  );
};
