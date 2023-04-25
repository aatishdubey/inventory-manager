import { Button } from "@components/Button";
import { Textarea } from "@components/Inputs";
import { TextInput } from "@components/Inputs/TextInput";

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  onClose: () => void;
}

export const AddProductForm = ({onClose, ...props}: Props) => {
  return (
    <form
      {...props}
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
        <Button fillType="dark" type="submit">
          Submit
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </div>
    </form>
  );
};
