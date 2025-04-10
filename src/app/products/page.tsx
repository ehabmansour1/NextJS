"use client";

import { useEffect, useState } from "react";
import { api, type Product } from "@/services/api";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await api.getAllProducts();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="products-container">
      <div className="products-header">
        <h1>Our Products</h1>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link href={`/products/${product.id}`} className="product-link">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h3 className="product-name">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-footer">
                <div className="product-price">${product.price.toFixed(2)}</div>
                <div className="rating">
                  {"★".repeat(Math.floor(product.rating.rate))}
                  {"☆".repeat(5 - Math.floor(product.rating.rate))}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
