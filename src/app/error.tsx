"use client";

import React from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-icon">⚠️</div>
        <h1>Something went wrong!</h1>
        <p className="error-message">{error.message}</p>
        <div className="error-actions">
          <button onClick={reset} className="primary-button">
            Try Again
          </button>
          <Link href="/" className="secondary-button">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
