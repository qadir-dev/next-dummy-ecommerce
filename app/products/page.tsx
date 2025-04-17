"use client";
import ProductCard from "@/components/product/ProductCard"
import Pagination from "@/components/pagination/Pagination"
import React from "react"
import { useGetProductsQuery } from "@/services/api/products.slice"
import { Loader } from "@/components/ui/Loader"

const page = ({ searchParams }: { searchParams: { page?: string } }) => {
  const currentPage = Number(searchParams.page) || 1;
  const itemsPerPage = 6;
  
  const { data: products = [], isLoading, isError } = useGetProductsQuery();
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <Loader size="lg" text="Loading products..." />
      </div>
    );
  }
  
  if (isError) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> Failed to load products. Please try again later.</span>
        </div>
      </div>
    );
  }
  
  const totalPages = Math.ceil((products?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products?.slice(startIndex, startIndex + itemsPerPage) || [];
  
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Our Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentProducts.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              price={product.price}
              stock={product.stock}
            />
          ))}
        </div>

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </>
  );
};

export default page