import React from "react";
import ProductCard from "@/components/product/ProductCard";
import Pagination from "@/components/pagination/Pagination";
import { useGetProductsQuery } from "@/services/api/products.slice";

const page = ({ searchParams }: { searchParams: { page?: string } }) => {
  const { data: products = [], isLoading, isError } = useGetProductsQuery();

  const currentPage = Number(searchParams.page) || 1;
  const itemsPerPage = 6;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Our Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentProducts?.map((product, index) => (
            <ProductCard
              key={index}
              name={product.title}
              price={product.price}
            />
          ))}
        </div>

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </>
  );
};

export default page;
