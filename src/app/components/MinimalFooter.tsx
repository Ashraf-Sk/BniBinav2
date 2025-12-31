import React from 'react';
import { BNIBINALogo } from './BNIBINALogo';

export function MinimalFooter() {
  return (
    <footer id="contact" className="border-t border-border px-6 lg:px-12 py-12" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <BNIBINALogo />
            <p className="font-[var(--font-body)] text-foreground/70 leading-relaxed" style={{ fontSize: '0.875rem', fontWeight: 400 }}>
              BniBina accompagne vos projets de construction et de finition en alliant expertise traditionnelle, matériaux de qualité et innovation numérique.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-[var(--font-heading)] mb-4 text-foreground" style={{ fontSize: '1rem', fontWeight: 700 }}>
              NAVIGATION
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#top" 
                  className="font-[var(--font-body)] text-foreground/70 hover:text-accent transition-colors" 
                  style={{ fontSize: '0.875rem', fontWeight: 400 }}
                >
                  Accueil
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="font-[var(--font-body)] text-foreground/70 hover:text-accent transition-colors" 
                  style={{ fontSize: '0.875rem', fontWeight: 400 }}
                >
                  Nos services
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="font-[var(--font-body)] text-foreground/70 hover:text-accent transition-colors" 
                  style={{ fontSize: '0.875rem', fontWeight: 400 }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[var(--font-heading)] mb-4 text-foreground" style={{ fontSize: '1rem', fontWeight: 700 }}>
              CONTACTEZ-NOUS
            </h3>
            <ul className="space-y-2">
              <li className="font-[var(--font-body)] text-foreground/70" style={{ fontSize: '0.875rem', fontWeight: 400 }}>
                <a href="mailto:email@bnibina.com" className="hover:text-accent transition-colors">email@bnibina.com</a>
              </li>
              <li className="font-[var(--font-body)] text-foreground/70" style={{ fontSize: '0.875rem', fontWeight: 400 }}>
                <a href="tel:0663488900" className="hover:text-accent transition-colors">+212 663488900</a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/bni_bina/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[var(--font-body)] text-foreground/70 hover:text-accent transition-colors" 
                  style={{ fontSize: '0.875rem', fontWeight: 400 }}
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-[var(--font-body)] text-foreground/50" style={{ fontSize: '0.875rem', fontWeight: 400 }}>
            © 2026 BNI BINA. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-[var(--font-body)] text-foreground/50 hover:text-accent transition-colors" style={{ fontSize: '0.875rem', fontWeight: 400 }}>
              Privacy Policy
            </a>
            <a href="#" className="font-[var(--font-body)] text-foreground/50 hover:text-accent transition-colors" style={{ fontSize: '0.875rem', fontWeight: 400 }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
