"use client";

import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-glitch">404</div>
        <h1>Page Not Found</h1>
        <p>
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="not-found-actions">
          <Link href="/" className="primary-button">
            Go Home
          </Link>
          <Link href="/products" className="secondary-button">
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
