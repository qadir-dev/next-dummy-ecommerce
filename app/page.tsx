import Button from "@/components/Button";

const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center mt-5">
        Dummy Coffee
      </h1>
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 text-black">
        <h1 className="text-5xl font-bold drop-shadow-md">
          قهوه‌ای برای هر سلیقه
        </h1>
        <p className="mt-4 text-lg max-w-x drop-shadow-sm">
          بهترین دانه‌های قهوه از سراسر جهان، تحویل سریع، طعمی بی‌نظیر
        </p>

        <Button
          className="mt-6 px-6 py-3  rounded-xl text-white"
          variant="accent"
        >
          خرید قهوه
        </Button>
      </section>
    </>
  );
};

export default Home;
