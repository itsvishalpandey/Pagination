import React from "react";

function PaginationInput({ product }) {
  return (
    <>
      <div className="shadow-2xl w-64 h-58 text-center mx-auto p-4 ">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-5/4 object-cover"
        />
        <p className="pt-4">{product.title}</p>
      </div>
    </>
  );
}

export default PaginationInput;
