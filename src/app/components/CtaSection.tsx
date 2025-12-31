import React from 'react';
export function CtaSection() {
  return (
    <section className="px-6 lg:px-12 py-32">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        {/* Divider Line */}
        <div className="w-24 h-px bg-accent mx-auto" />

        {/* Content */}
        <div className="space-y-6">
          <h2 
            className="font-[var(--font-heading)] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Crafted for Those Who Appreciate the Finer Things
          </h2>
          <p 
            className="font-[var(--font-body)] text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: '1.125rem' }}
          >
            Each piece in our collection is meticulously selected to embody the perfect balance of modern sophistication and timeless appeal.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-6">
          <button className="px-12 py-5 bg-accent text-accent-foreground font-[var(--font-body)] tracking-wide rounded-full hover:bg-accent/90 transition-all duration-300 hover:scale-105">
            Visit Our Atelier
          </button>
        </div>

        {/* Divider Line */}
        <div className="w-24 h-px bg-accent mx-auto pt-12" />
      </div>
    </section>
  );
}
