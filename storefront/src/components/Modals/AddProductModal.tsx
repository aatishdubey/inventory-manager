import { Dialog } from "@headlessui/react";
import { AddProductForm } from "@components/Forms/AddProductForm";
import { useMutation } from "@tanstack/react-query";
import { TQueryBody, createProduct } from "@api/products";
import { queryClient } from "@api/index";

type Props = {
  isModalOpen: boolean;
  onClose: () => void;
};

export const AddProductModal = ({ isModalOpen, onClose }: Props) => {
  const mutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.currentTarget;

    const values: { [key: string]: string | number } = {};
    const inputs: NodeListOf<HTMLInputElement | HTMLTextAreaElement> =
      form.querySelectorAll("input,textarea");

    inputs.forEach((input) => {
      values[input.name] = input.value;
    });

    mutation.mutate(values as TQueryBody);
  };

  return (
    <Dialog className="relative z-10" open={isModalOpen} onClose={onClose}>
      <div className="fixed inset-0 bg-black bg-opacity-25 opacity-100"></div>
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all opacity-100 scale-100">
            <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
              Add a new product
            </Dialog.Title>
            <Dialog.Description className="text-sm mt-1 mb-3 text-gray-500">
              Fill up product information below
            </Dialog.Description>

            <AddProductForm onClose={onClose} onSubmit={handleFormSubmit} />
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};
