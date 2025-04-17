import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Provider } from "react-redux";
import { store } from "@/services/store";

export const metadata: Metadata = {
  title: "Next Coffee",
  description: "Full stack project Just by JS",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="w-screen h-screen">
        <Provider store={store}>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
