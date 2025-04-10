import { Suspense } from "react";
import ProductCard from "../Components/ProductCard";
import ProductFilters from "../Components/ProductFilters";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

function filterProductsByPrice(
  products: Product[],
  priceRange: string
): Product[] {
  if (priceRange === "all") return products;

  const [min, max] = priceRange.split("-").map(Number);
  if (priceRange === "200+") {
    return products.filter((product) => product.price > 200);
  }

  return products.filter((product) => {
    const price = product.price;
    return price >= min && price <= max;
  });
}

function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const products = await getProducts();
  const priceRange = (searchParams.price as string) || "all";
  const filteredProducts = filterProductsByPrice(products, priceRange);

  return (
    <div className="products-container">
      <div className="products-header">
        <h1>Our Products</h1>
      </div>
      <Suspense fallback={<div className="loading">Loading products...</div>}>
        <ProductsList products={filteredProducts} />
      </Suspense>
    </div>
  );
}
