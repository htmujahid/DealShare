import { createNumberArray, createPages } from "@/lib/app/pagination";
import { useEffect, useState } from "react";

function Pagination({ page, setPage, totalPages }) {
  const [pageNumbers, setPageNumbers] = useState(
    totalPages > 5
      ? [1, 2, "...", totalPages - 1, totalPages]
      : createNumberArray(1, totalPages)
  );

  const pageBtnStyles = {
    active: "h-full w-[60px] border border-secondary-900 cursor-default",
    inactive: "h-full w-[60px] hover:bg-secondary-100",
  };

  useEffect(() => {
    createPages(page + 1, totalPages, setPageNumbers);
  }, [page, totalPages]);

  return (
    <div className="w-fit border border-secondary-300 mx-auto mb-16 rounded h-[50px]">
      <button
        disabled={page === 0}
        className={
          page === 0
            ? "after:content-['|'] after:ml-2 text-secondary-600 w-[100px] h-full"
            : "after:content-['|'] after:ml-2 w-[100px] h-full hover:bg-secondary-100"
        }
        onClick={() => setPage(page - 1)}
      >
        <span>Previous</span>
      </button>
      {pageNumbers?.map((pageNum) => (
        <button
          disabled={pageNum == "..."}
          className={
            pageNum === page + 1
              ? pageBtnStyles.active
              : pageNum == "..."
              ? "cursor-default w-[40px] border-0 hover:bg-[#fff]"
              : pageBtnStyles.inactive
          }
          key={pageNum}
          onClick={() => setPage(pageNum - 1)}
        >
          {pageNum}
        </button>
      ))}
      <button
        disabled={page === totalPages - 1}
        className={
          page === totalPages - 1
            ? "before:content-['|'] before:mr-2 text-secondary-600 w-[80px] h-full"
            : "before:content-['|'] w-[100px] before:mr-2 w-[80px] h-full hover:bg-secondary-100"
        }
        onClick={() => setPage(page + 1)}
      >
        <span>Next</span>
      </button>
    </div>
  );
}

export default Pagination;
