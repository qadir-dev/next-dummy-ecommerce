"use client";
import { Loader } from "@/components/ui/Loader";
import { store } from "@/services/store";
import { Provider } from "react-redux";

const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-16">Dummy Coffee</h1>
      <Loader size="lg" text="لطفاً صبر کنید..." />
    </>
  );
};

export default Home;
