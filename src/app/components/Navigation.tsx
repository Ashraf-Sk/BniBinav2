import React from 'react';
export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-[var(--font-heading)] tracking-wider">MAISON</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#" className="font-[var(--font-body)] tracking-wide hover:text-accent transition-colors duration-300">
              Collections
            </a>
            <a href="#" className="font-[var(--font-body)] tracking-wide hover:text-accent transition-colors duration-300">
              About
            </a>
            <a href="#" className="font-[var(--font-body)] tracking-wide hover:text-accent transition-colors duration-300">
              Atelier
            </a>
            <a href="#" className="font-[var(--font-body)] tracking-wide hover:text-accent transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center space-x-6">
            <button className="font-[var(--font-body)] tracking-wide hover:text-accent transition-colors duration-300">
              Cart (0)
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
