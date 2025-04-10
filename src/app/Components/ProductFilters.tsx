"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function ProductFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPrice = searchParams.get("price") || "all";

  function handleFilter(priceRange: string) {
    const params = new URLSearchParams(searchParams);
    if (priceRange === "all") {
      params.delete("price");
    } else {
      params.set("price", priceRange);
    }
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="price-filter">
      <button
        className={currentPrice === "all" ? "active" : ""}
        onClick={() => handleFilter("all")}
      >
        All Prices
      </button>
      <button
        className={currentPrice === "0-50" ? "active" : ""}
        onClick={() => handleFilter("0-50")}
      >
        Under $50
      </button>
      <button
        className={currentPrice === "50-100" ? "active" : ""}
        onClick={() => handleFilter("50-100")}
      >
        $50 - $100
      </button>
      <button
        className={currentPrice === "100-200" ? "active" : ""}
        onClick={() => handleFilter("100-200")}
      >
        $100 - $200
      </button>
      <button
        className={currentPrice === "200+" ? "active" : ""}
        onClick={() => handleFilter("200+")}
      >
        Over $200
      </button>
    </div>
  );
}
