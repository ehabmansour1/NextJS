import React from "react";

export default function CategoriesPage() {
  const categories = [
    {
      name: "Electronics",
      description:
        "Browse our collection of electronic devices and accessories",
      icon: "📱",
    },
    {
      name: "Clothing",
      description: "Explore our fashion collection",
      icon: "👕",
    },
    {
      name: "Home & Living",
      description: "Discover items for your home and lifestyle",
      icon: "🏠",
    },
    {
      name: "Sports & Outdoors",
      description: "Gear up for your next adventure",
      icon: "⚽",
    },
    {
      name: "Beauty & Health",
      description: "Take care of yourself with our beauty products",
      icon: "💄",
    },
    {
      name: "Books & Media",
      description: "Expand your knowledge with our collection",
      icon: "📚",
    },
  ];

  return (
    <div className="categories-container">
      <div className="categories-header">
        <h1>Product Categories</h1>
        <p>Browse through our wide range of product categories</p>
      </div>

      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <div className="icon">{category.icon}</div>
            <h2>{category.name}</h2>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
