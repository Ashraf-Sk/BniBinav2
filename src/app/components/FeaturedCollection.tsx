import React from 'react';
import { ProductCard } from './ProductCard';

const products = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1739216906046-afc47ed589fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwbWluaW1hbHxlbnwxfHx8fDE3NjY5NjI4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Heritage Collection',
    category: 'Jewelry',
    price: '€2,450'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1747052881000-a640a4981dd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGVyZnVtZSUyMGJvdHRsZXxlbnwxfHx8fDE3NjY5NTMwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Essence No. 7',
    category: 'Fragrance',
    price: '€385'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1561634343-3a2787687046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd2F0Y2glMjBsdXh1cnl8ZW58MXx8fHwxNzY2ODcxNDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Classique Timepiece',
    category: 'Watches',
    price: '€5,800'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1761646238279-30de81702a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBoYW5kYmFnJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjY4NzQxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Le Tote Signature',
    category: 'Accessories',
    price: '€1,680'
  }
];

export function FeaturedCollection() {
  return (
    <section className="px-6 lg:px-12 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <p className="font-[var(--font-body)] tracking-[0.3em] uppercase text-muted-foreground">
            Curated Selection
          </p>
          <h2 
            className="font-[var(--font-heading)] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Featured Collection
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              category={product.category}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
