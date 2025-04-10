"use client";

import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Store</h1>
          <p>Discover amazing products at unbeatable prices</p>
          <div className="hero-buttons">
            <Link href="/products" className="primary-button">
              Shop Now
            </Link>
            <Link href="/products/categories" className="secondary-button">
              Browse Categories
            </Link>
          </div>
        </div>
      </section>
      <section className="features-section">
        <div className="feature-card">
          <div className="feature-icon">🚚</div>
          <h3>Free Shipping</h3>
          <p>On orders over $50</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💳</div>
          <h3>Secure Payment</h3>
          <p>100% secure payment</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔄</div>
          <h3>Easy Returns</h3>
          <p>30 days return policy</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📞</div>
          <h3>24/7 Support</h3>
          <p>Dedicated support</p>
        </div>
      </section>
    </div>
  );
}
