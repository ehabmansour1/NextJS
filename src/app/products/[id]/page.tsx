"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { api, type Product } from "@/services/api";
import Link from "next/link";
import Image from "next/image";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await api.getProductById(Number(id));
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!product) {
    return <div className="error">Product not found</div>;
  }

  const { image, title, rating, price, description, category } = product;
  const fullStars = "★".repeat(Math.floor(rating.rate));
  const emptyStars = "☆".repeat(5 - Math.floor(rating.rate));

  return (
    <div className="product-details-container">
      <div className="product-details-header">
        <Link href="/products" className="btn-back">
          ← Back to Products
        </Link>
        <h1>{title}</h1>
      </div>
      <div className="product-details-content">
        <div className="product-details-left">
          <div className="product-main-image">
            <Image
              src={image}
              alt={title}
              width={500}
              height={500}
              className="main-image"
            />
          </div>
          <div className="product-gallery">
            {product.images.map((image, index) => (
              <div key={index} className="gallery-image">
                <Image
                  src={image}
                  alt={`${product.name} - Image ${index + 1}`}
                  width={100}
                  height={100}
                  className="thumbnail"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="product-details-right">
          <div className="product-info">
            <h2 className="product-title">{title}</h2>
            <div className="product-rating">
              <div className="stars">
                {fullStars}
                {emptyStars}
              </div>
              <span className="rating-count">({rating.count} reviews)</span>
            </div>
            <div className="product-price">${price.toFixed(2)}</div>
            <div className="product-description">
              <h4>Description</h4>
              <p>{description}</p>
            </div>
            <div className="product-category">
              <h4>Category</h4>
              <p>{category}</p>
            </div>
            <div className="product-actions">
              <button className="btn-primary">Add to Cart</button>
              <button className="btn-buy">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
