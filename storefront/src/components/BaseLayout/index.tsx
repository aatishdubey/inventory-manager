import { Navbar } from "@components/Navbar";

type Props = {
  children: React.ReactNode;
};

export const BaseLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen relative bg-gradient-to-r from-sky-100 to-indigo-300">
      <Navbar />
      {children}
    </div>
  );
};
