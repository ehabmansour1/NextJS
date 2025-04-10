import Image from "next/image";
import Link from "next/link";

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

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const {
    id,
    title,
    price,
    image,
    rating: { rate },
  } = product;

  return (
    <div className="product-card">
      <div className="product-status">
        <span className="in-stock">In Stock</span>
      </div>
      <div className="product-image">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="product-name">{title}</h3>
      <div className="product-price">${price}</div>
      <div className="rating">★ {rate}</div>
      <div className="product-footer">
        <Link href={`/products/${id}`} className="btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
}
