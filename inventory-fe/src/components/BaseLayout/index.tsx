import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";

type Props = {
  children: React.ReactNode;
};

export const BaseLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
