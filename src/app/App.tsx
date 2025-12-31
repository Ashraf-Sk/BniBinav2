import { ComingSoonHero } from './components/ComingSoonHero';
import { FeaturesSection } from './components/FeaturesSection';
import { MinimalFooter } from './components/MinimalFooter';
import React from 'react';
export default function App() {
  return (
    <div className="min-h-screen">
      <main>
        <ComingSoonHero />
        <FeaturesSection />
      </main>
      <MinimalFooter />
    </div>
  );
}