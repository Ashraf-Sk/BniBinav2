import React from 'react';
export function Footer() {
  return (
    <footer className="border-t border-border px-6 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <h2 className="font-[var(--font-heading)] tracking-wider" style={{ fontSize: '2rem' }}>
              MAISON
            </h2>
            <p className="font-[var(--font-body)] text-muted-foreground leading-relaxed max-w-sm">
              Curating timeless elegance and modern luxury since 2010. Every piece tells a story of craftsmanship and refined taste.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-[var(--font-body)] tracking-[0.2em] uppercase text-muted-foreground" style={{ fontSize: '0.75rem' }}>
              Explore
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-[var(--font-body)] hover:text-accent transition-colors duration-300">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="font-[var(--font-body)] hover:text-accent transition-colors duration-300">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="font-[var(--font-body)] hover:text-accent transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="font-[var(--font-body)] hover:text-accent transition-colors duration-300">
                  Journal
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-[var(--font-body)] tracking-[0.2em] uppercase text-muted-foreground" style={{ fontSize: '0.75rem' }}>
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-[var(--font-body)] hover:text-accent transition-colors duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="font-[var(--font-body)] hover:text-accent transition-colors duration-300">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="font-[var(--font-body)] hover:text-accent transition-colors duration-300">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="font-[var(--font-body)] hover:text-accent transition-colors duration-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="font-[var(--font-body)] tracking-[0.2em] uppercase text-muted-foreground" style={{ fontSize: '0.75rem' }}>
              Stay Connected
            </h3>
            <p className="font-[var(--font-body)] text-muted-foreground">
              Subscribe to receive updates on new arrivals and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 bg-card border border-border rounded-full font-[var(--font-body)] focus:outline-none focus:border-accent transition-colors"
              />
              <button className="px-6 py-3 bg-accent text-accent-foreground font-[var(--font-body)] rounded-full hover:bg-accent/90 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-[var(--font-body)] text-muted-foreground" style={{ fontSize: '0.875rem' }}>
            © 2024 Maison. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="font-[var(--font-body)] text-muted-foreground hover:text-accent transition-colors" style={{ fontSize: '0.875rem' }}>
              Privacy Policy
            </a>
            <a href="#" className="font-[var(--font-body)] text-muted-foreground hover:text-accent transition-colors" style={{ fontSize: '0.875rem' }}>
              Terms of Service
            </a>
            <a href="#" className="font-[var(--font-body)] text-muted-foreground hover:text-accent transition-colors" style={{ fontSize: '0.875rem' }}>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
