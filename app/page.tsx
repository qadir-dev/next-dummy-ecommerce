import { Loader } from "@/components/ui/Loader";

const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-16">Dummy Coffee</h1>
      <Loader size="lg" text="لطفاً صبر کنید..." />
    </>
  );
};

export default Home;
