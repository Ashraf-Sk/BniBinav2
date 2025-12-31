import React from 'react';
import { BNIBINALogoBackground } from './BNIBINALogo';

export function BrandStory() {
  return (
    <section className="relative px-6 lg:px-12 py-24 bg-card overflow-hidden">
      {/* Professional Logo Background */}
      <BNIBINALogoBackground variant="centered" opacity={0.02} className="z-0" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="w-16 h-1 mb-6" style={{ backgroundColor: '#FF6B35' }} />
              <h2 
                className="font-[var(--font-heading)] tracking-tight leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900 }}
              >
                WHO WE ARE
              </h2>
            </div>
            <p 
              className="font-[var(--font-body)] text-foreground leading-relaxed"
              style={{ fontSize: '1.125rem', fontWeight: 500 }}
            >
              BniBina est une entreprise innovante spécialisée dans les finitions de bâtiment et la fourniture de matériaux de construction de qualité supérieure. Actuellement en phase de lancement, nous révolutionnons le secteur en combinant l'expertise traditionnelle avec les technologies numériques.
            </p>
            <p 
              className="font-[var(--font-body)] text-muted-foreground leading-relaxed"
              style={{ fontSize: '1rem', fontWeight: 400 }}
            >
              Notre équipe de professionnels qualifiés met son expertise au service de vos ambitions, en alliant savoir-faire traditionnel et innovations modernes. De la conception à la réalisation, nous accompagnons chaque étape de votre projet avec précision et passion.
            </p>
            <p 
              className="font-[var(--font-body)] text-muted-foreground leading-relaxed"
              style={{ fontSize: '1rem', fontWeight: 400 }}
            >
              Bientôt, découvrez notre plateforme complète qui transformera votre façon de gérer vos projets de construction et de rénovation. Une solution intégrée pour simplifier vos défis, optimiser vos délais et concrétiser vos ambitions.
            </p>
            <p 
              className="font-[var(--font-body)] text-foreground leading-relaxed"
              style={{ fontSize: '1rem', fontWeight: 600 }}
            >
              Soyez parmi les premiers à rejoindre l'aventure BniBina.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg hover:shadow-lg transition-all duration-300" style={{ borderLeft: '4px solid #8B6F47' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(139, 111, 71, 0.1)' }}>
                  <span className="text-2xl" style={{ fontWeight: 900, color: '#8B6F47' }}>01</span>
                </div>
                <div>
                  <h3 className="font-[var(--font-heading)] mb-2" style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                    Network Growth
                  </h3>
                  <p className="font-[var(--font-body)] text-muted-foreground" style={{ fontWeight: 400 }}>
                    Build valuable relationships that drive business success and create lasting partnerships.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg hover:shadow-lg transition-all duration-300" style={{ borderLeft: '4px solid #8B6F47' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(139, 111, 71, 0.1)' }}>
                  <span className="text-2xl" style={{ fontWeight: 900, color: '#8B6F47' }}>02</span>
                </div>
                <div>
                  <h3 className="font-[var(--font-heading)] mb-2" style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                    Skill Development
                  </h3>
                  <p className="font-[var(--font-body)] text-muted-foreground" style={{ fontWeight: 400 }}>
                    Access cutting-edge training programs and resources to stay ahead in your industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg hover:shadow-lg transition-all duration-300" style={{ borderLeft: '4px solid #8B6F47' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(139, 111, 71, 0.1)' }}>
                  <span className="text-2xl" style={{ fontWeight: 900, color: '#8B6F47' }}>03</span>
                </div>
                <div>
                  <h3 className="font-[var(--font-heading)] mb-2" style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                    Digital Innovation
                  </h3>
                  <p className="font-[var(--font-body)] text-muted-foreground" style={{ fontWeight: 400 }}>
                    Leverage modern technology to streamline operations and maximize efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
