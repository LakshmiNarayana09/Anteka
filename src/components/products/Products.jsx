import React from "react";
import products from "./productsData";
import ProductCard from "./ProductCard";

function Products({ reverse = false, columns = 5, limit }) {
  let displayProducts = reverse ? [...products].reverse() : products;

  if (limit) {
    displayProducts = displayProducts.slice(0, limit);
  }

  return (
    <div
      className={`grid ${
        columns === 4
          ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      } gap-4 sm:gap-5 lg:gap-6`}
    >
      {displayProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;