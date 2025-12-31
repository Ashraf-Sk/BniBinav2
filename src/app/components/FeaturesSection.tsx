import React, { useEffect, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BNIBINALogoBackground } from './BNIBINALogo';

const services = [
  {
    id: 1,
    image: '/images/Renovation.jpeg',
    title: 'Rénovation',
    subtitle: 'Travaux de rénovation intérieure',
    description: 'Rénovation complète de votre intérieur avec un accompagnement de A à Z. De la conception à la réalisation.'
  },
  {
    id: 2,
    image: '/images/Materiaux.jpeg',
    title: 'Matériaux',
    subtitle: 'Large gamme de matériaux de construction',
    description: 'Large gamme de matériaux de construction de qualité. Des grandes marques aux meilleurs prix.'
  },
  {
    id: 3,
    image: '/images/Consultation.jpg',
    title: 'Consultation',
    subtitle: 'Conseil expert et expertise pour vos projets',
    description: 'Conseil expert et expertise pour vos projets. Estimation gratuite et accompagnement personnalisé.'
  },
  {
    id: 4,
    image: '/images/Finition.jpg',
    title: 'Finitions',
    subtitle: 'Travaux de finition de qualité',
    description: 'Travaux de finition de qualité pour parfaire votre intérieur. Peinture, revêtements muraux et sols.'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    title: 'Maintenance',
    subtitle: 'Services de maintenance et réparation',
    description: 'Services de maintenance et réparation pour entretenir et préserver votre habitat dans le temps.'
  }
];

export function FeaturesSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section className="relative px-6 lg:px-12 py-24 overflow-hidden" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Professional Logo Background */}
      <BNIBINALogoBackground variant="pattern" opacity={0.015} className="z-0" />
      
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(255, 107, 53, 0.4)) drop-shadow(0 0 16px rgba(255, 107, 53, 0.2));
          }
          50% {
            filter: drop-shadow(0 0 12px rgba(255, 107, 53, 0.6)) drop-shadow(0 0 24px rgba(255, 107, 53, 0.3));
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .title-gradient {
          background: linear-gradient(90deg, #FF6B35 0%, #FFB84D 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 8px rgba(255, 107, 53, 0.4)) drop-shadow(0 0 16px rgba(255, 107, 53, 0.2));
          transition: all 0.3s ease;
        }
        
        .title-gradient:hover {
          transform: scale(1.02);
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 
            ref={titleRef}
            className="font-[var(--font-heading)] tracking-tight title-gradient opacity-0"
            style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              fontWeight: 900
            }}
          >
            NOS SERVICES
          </h2>
          <p 
            className="font-[var(--font-body)] text-muted-foreground max-w-2xl mx-auto leading-relaxed pt-4"
            style={{ fontSize: '1.125rem', fontWeight: 500 }}
          >
            Une solution complète pour tous vos projets de construction et rénovation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group relative overflow-hidden rounded-xl bg-card hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 
                  className="font-[var(--font-heading)] mb-1"
                  style={{ fontSize: '1.5rem', fontWeight: 800 }}
                >
                  {service.title}
                </h3>
                <p className="font-[var(--font-body)] text-white/90 mb-2" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                  {service.subtitle}
                </p>
                <p className="font-[var(--font-body)] text-white/80" style={{ fontWeight: 500, fontSize: '0.9375rem' }}>
                  {service.description}
                </p>
              </div>
              {/* Orange accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
