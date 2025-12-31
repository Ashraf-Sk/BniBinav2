import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BNIBINALogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <ImageWithFallback
        src="/images/BniBina-Logo.png"
        alt="BNI BINA Logo"
        className="h-36 w-auto"
      />
    </div>
  );
}

// Professional background logo component
export function BNIBINALogoBackground({ 
  variant = "watermark",
  opacity = 0.03,
  className = "" 
}: { 
  variant?: "watermark" | "pattern" | "centered";
  opacity?: number;
  className?: string;
}) {
  const logoUrl = "/images/BniBina-Logo.png";

  if (variant === "centered") {
    return (
      <div className={`absolute inset-0 flex items-center justify-center pointer-events-none ${className}`}>
        <div 
          className="w-full h-full max-w-4xl max-h-4xl"
          style={{ 
            backgroundImage: `url(${logoUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            opacity: opacity
          }}
        />
      </div>
    );
  }

  if (variant === "pattern") {
    return (
      <div 
        className={`absolute inset-0 pointer-events-none ${className}`}
        style={{
          backgroundImage: `url(${logoUrl})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '300px auto',
          opacity: opacity,
          backgroundPosition: '0 0'
        }}
      />
    );
  }

  // Default: watermark with creative positioning
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Large centered watermark */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        style={{
          backgroundImage: `url(${logoUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          opacity: opacity
        }}
      />
      {/* Smaller decorative elements */}
      <div 
        className="absolute top-20 right-20 w-64 h-64 rotate-12"
        style={{
          backgroundImage: `url(${logoUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          opacity: opacity * 0.5
        }}
      />
      <div 
        className="absolute bottom-20 left-20 w-48 h-48 -rotate-12"
        style={{
          backgroundImage: `url(${logoUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          opacity: opacity * 0.4
        }}
      />
    </div>
  );
}
