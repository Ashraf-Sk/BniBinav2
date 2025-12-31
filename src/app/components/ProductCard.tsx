import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';
interface ProductCardProps {
  image: string;
  title: string;
  category: string;
  price: string;
}

export function ProductCard({ image, title, category, price }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-sm">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <p className="font-[var(--font-body)] tracking-[0.2em] uppercase text-muted-foreground" style={{ fontSize: '0.75rem' }}>
          {category}
        </p>
        <h3 className="font-[var(--font-heading)]" style={{ fontSize: '1.5rem' }}>
          {title}
        </h3>
        <p className="font-[var(--font-body)] text-accent" style={{ fontSize: '1.125rem' }}>
          {price}
        </p>
      </div>
    </div>
  );
}
