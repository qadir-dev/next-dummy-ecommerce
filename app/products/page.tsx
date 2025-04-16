import ProductCard from "@/components/ProductCard"
import Pagination from "@/components/Pagination"
import React from "react"

const products = [
  { name: "Normal Coffee", price: 100 },
  { name: "Hot Coffee", price: 150 },
  { name: "Cold Coffee", price: 174 },
  { name: "Nescafe", price: 145 },
  { name: "Latte", price: 130 },
  { name: "Tee", price: 90 },
  { name: "Masella", price: 125 },
  { name: "Hot chocolate", price: 110 },
  { name: "Mocha", price: 120 },
  { name: "Mocha", price: 120 },
  { name: "Mocha", price: 120 },
  { name: "Mocha", price: 120 },
  { name: "Mocha", price: 120 },
  { name: "Mocha", price: 120 },
  { name: "Mocha", price: 120 },
  { name: "Mocha", price: 120 },
  { name: "Mocha", price: 120 },
  // ... محصولات بیشتر
];

const page = ({ searchParams }: { searchParams: { page?: string } }) => {
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
          {currentProducts.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </>
  );
};

export default page