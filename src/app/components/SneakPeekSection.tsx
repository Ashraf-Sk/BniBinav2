import { ProductCard } from './ProductCard';
import React from 'react';
const sneakPeekProducts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1739216906046-afc47ed589fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwbWluaW1hbHxlbnwxfHx8fDE3NjY5NjI4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Heritage Collection',
    category: 'Jewelry',
    price: 'Coming Soon'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1747052881000-a640a4981dd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGVyZnVtZSUyMGJvdHRsZXxlbnwxfHx8fDE3NjY5NTMwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Essence No. 7',
    category: 'Fragrance',
    price: 'Coming Soon'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1561634343-3a2787687046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd2F0Y2glMjBsdXh1cnl8ZW58MXx8fHwxNzY2ODcxNDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Classique Timepiece',
    category: 'Watches',
    price: 'Coming Soon'
  }
];

export function SneakPeekSection() {
  return (
    <section className="px-6 lg:px-12 py-32 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <p className="font-[var(--font-body)] tracking-[0.3em] uppercase text-muted-foreground">
            Sneak Peek
          </p>
          <h2 
            className="font-[var(--font-heading)] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            A Glimpse of What's to Come
          </h2>
          <p 
            className="font-[var(--font-body)] text-muted-foreground max-w-2xl mx-auto leading-relaxed pt-4"
            style={{ fontSize: '1.125rem' }}
          >
            Each piece meticulously selected to embody the perfect balance of modern sophistication and timeless appeal.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 max-w-5xl mx-auto">
          {sneakPeekProducts.map((product) => (
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
