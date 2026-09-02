import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrayAnatomy } from './components/TrayAnatomy';
import { WhyNeuroBite } from './components/WhyNeuroBite';
import { RoiCalculator } from './components/RoiCalculator';
import { Plans } from './components/Plans';
import { QualityLogistics } from './components/QualityLogistics';
import { QrExperienceModal } from './components/QrExperienceModal';
import { SampleModal } from './components/SampleModal';
import { Footer } from './components/Footer';

export function App() {
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 font-sans selection:bg-[#0088FF] selection:text-white">
      
      {/* Navigation Bar */}
      <Navbar
        onOpenSampleModal={() => setIsSampleModalOpen(true)}
        onOpenQrModal={() => setIsQrModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenSampleModal={() => setIsSampleModalOpen(true)}
          onOpenQrModal={() => setIsQrModalOpen(true)}
        />

        <TrayAnatomy
          onOpenQrModal={() => setIsQrModalOpen(true)}
        />

        <WhyNeuroBite />

        <RoiCalculator
          onOpenSampleModal={() => setIsSampleModalOpen(true)}
        />

        <Plans
          onOpenSampleModal={() => setIsSampleModalOpen(true)}
        />

        <QualityLogistics />
      </main>

      {/* Footer */}
      <Footer
        onOpenSampleModal={() => setIsSampleModalOpen(true)}
      />

      {/* Interactive Modals */}
      <SampleModal
        isOpen={isSampleModalOpen}
        onClose={() => setIsSampleModalOpen(false)}
      />

      <QrExperienceModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
      />

    </div>
  );
}

export default App;
