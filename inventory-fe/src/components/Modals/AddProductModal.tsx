import { Dialog } from "@headlessui/react";
import { AddProductForm } from "@components/Forms/AddProductForm";

type Props = {
  isModalOpen: boolean;
  onClose: () => void;
};

export const AddProductModal = ({ isModalOpen, onClose }: Props) => {
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
            <AddProductForm onClose={onClose} />
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};
