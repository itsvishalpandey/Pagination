import React, { useEffect, useState } from "react";
import axios from "axios";
import PaginationInput from "./PaginationInput";

function Pagination() {
  const [products, setProducts] = useState([]);
  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=100"
      );
      setProducts(response.data.products);
    };
    getProducts();
  }, []);

  console.log(products);

  const handlePagination = (page) => {
    if (page >= 1 && page <= products.length / 10 && page != currPage)
      setCurrPage(page);
  };

  return (
    <>
      <div className="flex items-center justify-center py-8">
        <span
          className="border border-black px-4 py-2 cursor-pointer"
          onClick={() => handlePagination(currPage - 1)}
        >
          Prev
        </span>
        {[...Array(products.length / 10)].map((_, i) => (
          <span
            key={i}
            className={`border border-black px-4 py-2 cursor-pointer ease-in-out duration-300 ${
              currPage === i + 1 ? "bg-gray-300" : ""
            }`}
            onClick={() => handlePagination(i + 1)}
          >
            {i + 1}
          </span>
        ))}
        <span
          className="border border-black px-4 py-2 cursor-pointer"
          onClick={() => handlePagination(currPage + 1)}
        >
          Next
        </span>
      </div>
      <div className="grid grid-cols-4 gap-5 p-8">
        {products.slice(currPage * 10 - 10, currPage * 10).map((product) => (
          <PaginationInput key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Pagination;
