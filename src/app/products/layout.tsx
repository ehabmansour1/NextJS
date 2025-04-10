"use client";

import React from "react";
import ProductFilters from "../Components/ProductFilters";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="products-container">
      <div className="products-content">
        <ProductFilters />
        <div className="products-main">{children}</div>
      </div>
    </div>
  );
}
