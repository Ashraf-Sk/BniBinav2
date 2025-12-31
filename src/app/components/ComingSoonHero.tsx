import { ImageWithFallback } from './figma/ImageWithFallback';
import { BNIBINALogo, BNIBINALogoBackground } from './BNIBINALogo';
import React from 'react';

export function ComingSoonHero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 bg-secondary overflow-hidden">
      {/* Professional Logo Background */}
      <BNIBINALogoBackground variant="watermark" opacity={0.04} className="z-0" />
      
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255, 107, 53, 0.4) 35px, rgba(255, 107, 53, 0.4) 70px)`
        }} />
      </div>

      {/* Orange Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-accent z-30" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center space-y-12 py-20">
        {/* Logo */}
        <div className="flex justify-center">
          <BNIBINALogo className="text-white" />
        </div>

        {/* Main Message */}
        <div className="space-y-6">
          <style>{`
            @keyframes fadeInScale {
              from {
                opacity: 0;
                transform: scale(0.95);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
            
            .coming-soon-title {
              background: linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 184, 77, 0.8) 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              letter-spacing: 0.1em;
              text-transform: uppercase;
              animation: fadeInScale 1s ease-out;
              filter: drop-shadow(0 4px 20px rgba(255, 107, 53, 0.3));
            }
            
          `}</style>
          <h1 
            className="font-[var(--font-heading)] coming-soon-title"
            style={{ 
              fontSize: 'clamp(3rem, 8vw, 6.5rem)', 
              fontWeight: 900,
              lineHeight: '1.1',
              letterSpacing: '0.15em'
            }}
          >
            COMING SOON
          </h1>
          <p 
            className="font-[var(--font-body)] text-white/80 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: '1.25rem', fontWeight: 500, marginTop: '2rem' }}
          >
            We're launching a new digital platform designed to empower businesses and connect communities.
          </p>
        </div>

        {/* Email Signup */}
        <div className="space-y-6 pt-8">
          <p className="font-[var(--font-body)] tracking-wide text-white" style={{ fontWeight: 600 }}>
            BE THE FIRST TO KNOW WHEN WE LAUNCH
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-[var(--font-body)] text-white placeholder:text-white/50 focus:outline-none focus:border-accent focus:bg-white/15 transition-all"
            />
            <button className="px-8 py-4 bg-accent text-white font-[var(--font-body)] rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/20" style={{ fontWeight: 700 }}>
              NOTIFY ME
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 pt-12">
          <a 
            href="https://www.instagram.com/bni_bina/" 
            target="_blank"
            rel="noopener noreferrer"
            className="font-[var(--font-body)] text-white/70 hover:text-accent transition-colors duration-300 hover:scale-110 transform"
            style={{ fontSize: '0.875rem', fontWeight: 600 }}
          >
            Instagram
          </a>
        </div>

        {/* Tagline */}
        <p className="text-white/50 font-[var(--font-body)] tracking-wider pt-8" style={{ fontSize: '0.875rem' }}>
          EMPOWERING BUSINESSES • CONNECTING COMMUNITIES
        </p>
      </div>
    </section>
  );
}
