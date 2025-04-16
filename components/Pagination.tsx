"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    return `?${params.toString()}`;
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <Link
        href={createPageURL(1)}
        className={`px-5 py-5 rounded-xl border-solid border-1 font-bold border-gray-300 shadow-[0_2px_4px_rgba(0,0,0,0.1)] ${
          currentPage === 1
            ? "bg-gray-200 cursor-not-allowed text-gray-400"
            : "text-[#3E3E3E] hover:bg-[#FAF6F0]"
        }`}
        aria-disabled={currentPage === 1}
      >
        First
      </Link>

      {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
        let pageNum;
        if (totalPages <= 3) {
          pageNum = i + 1;
        } else if (currentPage === 1) {
          pageNum = i + 1;
        } else if (currentPage === totalPages) {
          pageNum = totalPages - 2 + i;
        } else {
          pageNum = currentPage - 1 + i;
        }

        return (
          <Link
            key={pageNum}
            href={createPageURL(pageNum)}
            className={`px-5 py-5 rounded-xl border-solid border-1 border-gray-300 font-bold shadow-[0_2px_4px_rgba(0,0,0,0.1)] ${
              currentPage === pageNum
                ? "bg-[#6F4E37] text-white "
                : "text-[#3E3E3E] hover:bg-[#FAF6F0]"
            }`}
          >
            {pageNum}
          </Link>
        );
      })}

      <Link
        href={createPageURL(totalPages)}
        className={`px-5 py-5 rounded-xl border-solid border-1 font-bold border-gray-300 shadow-[0_2px_4px_rgba(0,0,0,0.1)] ${
          currentPage === totalPages
            ? "bg-gray-200 cursor-not-allowed text-gray-400 "
            : "text-[#3E3E3E] hover:bg-[#FAF6F0]"
        }`}
        aria-disabled={currentPage === totalPages}
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
