"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { api, type Product } from "@/services/api";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await api.getProductById(Number(id));
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) return null;

  const { image, title, rating, price, description, category } = product;

  const fullStars = "★".repeat(Math.round(rating.rate));
  const emptyStars = "☆".repeat(5 - Math.round(rating.rate));

  return (
    <div className="product-details-container">
      <div className="product-details">
        <div className="product-images">
          <div className="main-image">
            <img src={image} alt={title} />
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-title">{title}</h1>

          <div className="product-rating">
            <div className="stars">
              {fullStars}
              {emptyStars}
            </div>
            <span className="rating-count">({rating.count} reviews)</span>
          </div>

          <div className="product-price">${price.toFixed(2)}</div>

          <div className="product-description">
            <h2>Description</h2>
            <p>{description}</p>
          </div>

          <div className="product-category">
            <h2>Category</h2>
            <p>{category}</p>
          </div>

          <div className="product-actions">
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
