import { APP_NAME } from "src/config";

export const Footer = () => {
  return (
    <footer className="mt-8 bg-slate-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm"><strong>{APP_NAME}</strong> by Aatish Dube</p>
      </div>
    </footer>
  );
};
