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
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="not-found-actions">
          <Link href="/" className="btn-primary">
            Go to Home
          </Link>
          <Link href="/products" className="btn">
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
