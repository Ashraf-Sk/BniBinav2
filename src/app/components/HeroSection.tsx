import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center py-24">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <p className="font-[var(--font-body)] tracking-[0.3em] uppercase text-muted-foreground">
              New Collection
            </p>
            <h1 
              className="font-[var(--font-heading)] tracking-tight leading-[1.1]"
              style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
            >
              Timeless Elegance
            </h1>
            <p className="font-[var(--font-body)] text-muted-foreground max-w-md leading-relaxed" style={{ fontSize: '1.125rem' }}>
              Discover our carefully curated selection of modern classics, designed to elevate your everyday moments with understated luxury.
            </p>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <button className="px-10 py-4 bg-accent text-accent-foreground font-[var(--font-body)] tracking-wide rounded-full hover:bg-accent/90 transition-all duration-300 hover:scale-105">
              Explore Collection
            </button>
            <button className="font-[var(--font-body)] tracking-wide border-b border-foreground pb-1 hover:border-accent hover:text-accent transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative aspect-[3/4] w-full">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1509319117730-cd6d3fa5266e?w=800&q=80"
            alt="Luxury product showcase"
            className="w-full h-full object-cover rounded-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent rounded-sm" />
        </div>
      </div>
    </section>
  );
}
